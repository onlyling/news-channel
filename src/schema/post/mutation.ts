import { mutationField, nonNull } from 'nexus'

import { PostAddInput, Post } from './types'

export const PostAdd = mutationField('postAdd', {
  type: nonNull(Post),
  args: {
    input: nonNull(PostAddInput),
  },
  async resolve(root, args, context) {
    const { input } = args
    const session = await context.getSession()

    if (!session?.username) {
      return Promise.reject(new Error('请登录后再操作'))
    }

    if (typeof input.id === 'number') {
      const d = await context.prisma.post.update({
        where: {
          id: input.id,
        },
        data: {
          title: input.title,
          categoryId: input.categoryId,
          content: input.content,
          authorId: session.id,
        },
      })

      return d
    } else {
      const d = await context.prisma.post.create({
        data: {
          title: input.title,
          categoryId: input.categoryId,
          content: input.content,
          authorId: session.id,
        },
      })

      return d
    }
  },
})
