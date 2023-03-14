import { objectType, inputObjectType, list } from 'nexus'
import { Category as NPCategory } from 'nexus-prisma'

export const Category = objectType({
  name: NPCategory.$name,
  description: NPCategory.$description,
  definition(t) {
    t.field(NPCategory.id)
    t.field(NPCategory.name)
  },
})

export const CategoryPageInput = inputObjectType({
  name: 'CategoryPageInput',
  definition(t) {
    t.string('name')
  },
})

export const CategoryPageResponse = objectType({
  name: 'CategoryPageResponse',
  nonNullDefaults: {
    output: true,
  },
  definition(t) {
    t.nonNull.int('total')
    t.nonNull.int('pageSize')
    t.nonNull.int('current')
    t.nonNull.field('records', {
      type: list(Category),
    })
  },
})

export const CategoryAddInput = inputObjectType({
  name: 'CategoryAddInput',
  definition(t) {
    t.int('id')
    t.nonNull.string('name')
  },
})

export const CategoryAddResponse = objectType({
  name: 'CategoryAddResponse',
  definition(t) {
    t.field('category', {
      type: Category,
    })
  },
})

export const CategoryDeleteInput = inputObjectType({
  name: 'CategoryDeleteInput',
  definition(t) {
    t.nonNull.int('id')
  },
})

export const CategoryDeleteResponse = objectType({
  name: 'CategoryDeleteResponse',
  definition(t) {
    t.nonNull.string('message')
  },
})

// export const CategoryListResponse = objectType({
//   name: 'CategoryListResponse',
// })
