import { list, nonNull, queryField } from 'nexus'

import { Page } from '../common/types'

import { CategoryPageInput, CategoryPageResponse, Category } from './types'

export const CategoryPage = queryField('categoryPage', {
  type: nonNull(CategoryPageResponse),
  args: {
    input: CategoryPageInput,
    page: Page,
  },
  async resolve(root, args, context) {
    const { page, input } = args
    const { pageSize = 10, pageCurrent = 1 } = page ?? {}
    const { name } = input ?? {}

    const where = name
      ? {
          name: {
            contains: name,
          },
        }
      : {}

    const data = await context.prisma.category.findMany({
      where,
      skip: (pageCurrent - 1) * pageSize,
      take: pageSize,
    })
    const total = await context.prisma.category.count({
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

export const CategoryList = queryField('categoryList', {
  type: nonNull(list(nonNull(Category))),
  async resolve(root, args, context) {
    const data = await context.prisma.category.findMany()

    return data
  },
})
