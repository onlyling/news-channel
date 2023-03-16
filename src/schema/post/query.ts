import { nonNull, queryField } from 'nexus'

import type { Context } from '../../libs/context'
import { Page } from '../common/types'

import {
  PostPageInput,
  PostPageResponse,
  PostDetailInput,
  Post,
  PostPublishedDetailInput,
} from './types'

const postPage = async (
  context: Context,
  args: {
    pageCurrent: number
    pageSize: number
    keyword?: string | null
    categoryId?: number | null
    admin: boolean
  },
) => {
  const { keyword, categoryId, pageSize = 10, pageCurrent = 1, admin } = args

  const where = {
    published: admin ? undefined : true,
    title: {
      contains: keyword || undefined,
    },
    categoryId: categoryId || undefined,
  }

  const data = await context.prisma.post.findMany({
    where,
    skip: (pageCurrent - 1) * pageSize,
    take: pageSize,
    orderBy: [
      {
        updatedAt: 'desc',
      },
    ],
  })
  const total = await context.prisma.post.count({
    where,
  })

  return {
    current: pageCurrent,
    pageSize: pageSize,
    total: total,
    records: data,
  }
}

export const PostPublishedPage = queryField('postPublishedPage', {
  type: nonNull(PostPageResponse),
  args: {
    input: PostPageInput,
    page: Page,
  },
  async resolve(root, args, context) {
    return await postPage(context, {
      categoryId: args.input?.categoryId,
      keyword: args.input?.keyword,
      pageCurrent: args.page?.pageCurrent ?? 1,
      pageSize: args.page?.pageSize ?? 10,
      admin: false,
    })
  },
})

export const PostPage = queryField('postPage', {
  type: nonNull(PostPageResponse),
  args: {
    input: PostPageInput,
    page: Page,
  },
  async resolve(root, args, context) {
    await context.checkAdminPrivilege()

    return await postPage(context, {
      categoryId: args.input?.categoryId,
      keyword: args.input?.keyword,
      pageCurrent: args.page?.pageCurrent ?? 1,
      pageSize: args.page?.pageSize ?? 10,
      admin: true,
    })
  },
})

export const PostDetail = queryField('postDetail', {
  type: nonNull(Post),
  args: {
    input: nonNull(PostDetailInput),
  },
  async resolve(root, args, context) {
    const d = await context.prisma.post.findFirst({
      where: {
        id: args.input.id,
      },
    })

    if (!d) {
      return Promise.reject(new Error('数据不存在'))
    }

    return d
  },
})

export const PostPublishedDetail = queryField('postPublishedDetail', {
  type: nonNull(Post),
  args: {
    input: nonNull(PostPublishedDetailInput),
  },
  async resolve(root, args, context) {
    const d = await context.prisma.post.findFirst({
      where: {
        id: args.input.id,
        published: true,
      },
    })

    if (!d) {
      return Promise.reject(new Error('数据不存在'))
    }

    return d
  },
})
