import { nonNull, queryField } from 'nexus'

import { Page } from '../common/types'

import { PostPageInput, PostPageResponse, PostDetailInput, Post } from './types'

export const PostPage = queryField('postPage', {
  type: nonNull(PostPageResponse),
  args: {
    input: PostPageInput,
    page: Page,
  },
  async resolve(root, args, context) {
    const { page, input } = args
    const { pageSize = 10, pageCurrent = 1 } = page ?? {}
    const { keyword, categoryId } = input ?? {}

    const where = {
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
