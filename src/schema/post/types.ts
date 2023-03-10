import { inputObjectType, list, objectType } from 'nexus'
import { Post as NPPost } from 'nexus-prisma'

export const Post = objectType({
  name: NPPost.$name,
  description: NPPost.$description,
  definition(t) {
    t.field(NPPost.id)
    t.field(NPPost.title)
    t.field(NPPost.content)
    t.field(NPPost.published)
    t.field(NPPost.authorId)
    t.field(NPPost.categoryId)
    t.nonNull.field('author', {
      type: 'String',
      async resolve(root, args, context) {
        const u = await context.prisma.user.findFirst({
          where: {
            id: root.authorId,
          },
        })

        return u?.username || ''
      },
    })
    t.nonNull.field('category', {
      type: 'String',
      async resolve(root, args, context) {
        const c = await context.prisma.category.findFirst({
          where: {
            id: root.authorId,
          },
        })

        return c?.name || ''
      },
    })
  },
})

export const PostPageInput = inputObjectType({
  name: 'PostPageInput',
  definition(t) {
    t.string('keyword')
    t.int('categoryId')
  },
})

export const PostPageResponse = objectType({
  name: 'PostPageResponse',
  definition(t) {
    t.nonNull.int('total')
    t.nonNull.int('pageSize')
    t.nonNull.int('current')
    t.nonNull.field('records', {
      type: list(Post),
    })
  },
})

export const PostAddInput = inputObjectType({
  name: 'PostAddInput',
  definition(t) {
    t.int('id')
    t.nonNull.int('categoryId')
    t.nonNull.string('title')
    t.string('content')
  },
})
