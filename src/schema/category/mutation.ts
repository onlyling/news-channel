import { mutationField, nonNull } from 'nexus'

import { CategoryAddInput, CategoryAddResponse } from './types'

export const CategoryAdd = mutationField('categoryAdd', {
  type: CategoryAddResponse,
  args: {
    input: nonNull(CategoryAddInput),
  },
  async resolve(root, args, context) {
    const session = await context.getSession()

    if (!session?.username) {
      return Promise.reject(new Error('请登录后再操作'))
    }

    const { input } = args

    if (typeof input.id === 'number') {
      const category = await context.prisma.category.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
        },
      })

      return { category }
    } else {
      const oldCategory = await context.prisma.category.findFirst({
        where: {
          name: input.name,
        },
      })

      if (oldCategory) {
        return Promise.reject(new Error('分类已存在'))
      }

      const category = await context.prisma.category.create({
        data: {
          name: input.name,
        },
      })

      return { category }
    }
  },
})
