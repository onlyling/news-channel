import { objectType, inputObjectType } from 'nexus'
import { User as NPUser } from 'nexus-prisma'

import { Post } from '../post/types'

export const User = objectType({
  name: NPUser.$name,
  description: NPUser.$description,
  definition(t) {
    t.field(NPUser.id)
    t.field(NPUser.email)
    t.field(NPUser.username)
    t.field(NPUser.password)
    // t.field(User.posts)
    t.nonNull.list.field('posts', {
      type: Post,
      resolve(root, args, ctx) {
        return ctx.prisma.post.findMany({
          where: {
            authorId: root.id,
          },
        })
      },
    })
  },
})

export const LoginInput = inputObjectType({
  name: 'LoginInput',
  definition(t) {
    t.nonNull.string('username')
    t.nonNull.string('password')
  },
})

export const MeResponse = objectType({
  name: 'MeResponse',
  definition(t) {
    t.int('id')
    t.string('username')
  },
})
