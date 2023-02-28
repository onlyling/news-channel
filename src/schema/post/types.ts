import { objectType } from 'nexus'
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
    // t.field(Post.author)
  },
})
