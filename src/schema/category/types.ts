import { makeSchema, objectType } from 'nexus'
import { Category as NPCategory } from 'nexus-prisma'

export const Category = makeSchema({
  types: [
    objectType({
      name: NPCategory.$name,
      description: NPCategory.$description,
      definition(t) {
        t.field(NPCategory.id)
        t.field(NPCategory.name)
        // t.field(NPCategory.posts)
      },
    }),
  ],
})
