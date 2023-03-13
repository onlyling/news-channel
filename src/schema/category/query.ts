import { queryField } from 'nexus'

import { Page } from '../common/types'

import { CategoryPageInput, CategoryPageResponse } from './types'

export const CategoryPage = queryField('categoryPage', {
  type: CategoryPageResponse,
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
          name,
        }
      : {}

    const data = await context.prisma.category.findMany({
      where,
      skip: (pageCurrent - 1) * pageSize,
      take: pageSize,
    })
    const total = await context.prisma.category.findMany({
      where,
    })

    return {
      current: pageCurrent,
      pageSize: pageSize,
      total: total.length,
      records: data,
    }
  },
})
