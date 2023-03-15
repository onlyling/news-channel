import { mutationField, nonNull } from 'nexus'

import { MessageResponse } from '../common/types'

import { PostAddInput, Post, PostPublishInput } from './types'

export const PostAdd = mutationField('postAdd', {
  type: nonNull(Post),
  args: {
    input: nonNull(PostAddInput),
  },
  async resolve(root, args, context) {
    await context.checkAdminPrivilege()

    const { input } = args
    const session = await context.getSession()

    if (typeof input.id === 'number') {
      const d = await context.prisma.post.update({
        where: {
          id: input.id,
        },
        data: {
          title: input.title,
          categoryId: input.categoryId,
          content: input.content,
          published: input.published,
          authorId: session!.id,
        },
      })

      return d
    } else {
      const d = await context.prisma.post.create({
        data: {
          title: input.title,
          categoryId: input.categoryId,
          content: input.content,
          published: input.published,
          authorId: session!.id,
        },
      })

      return d
    }
  },
})

export const PostPublish = mutationField('postPublish', {
  type: nonNull(MessageResponse),
  args: {
    input: nonNull(PostPublishInput),
  },
  async resolve(root, args, context) {
    await context.checkAdminPrivilege()

    const { input } = args

    await context.prisma.post.update({
      where: {
        id: input.id,
      },
      data: {
        published: input.published,
      },
    })

    return {
      message: '发布状态已更新',
    }
  },
})
