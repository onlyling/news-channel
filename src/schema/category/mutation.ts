import { mutationField, nonNull } from 'nexus'

import {
  CategoryAddInput,
  CategoryAddResponse,
  CategoryDeleteInput,
  CategoryDeleteResponse,
} from './types'

export const CategoryAdd = mutationField('categoryAdd', {
  type: nonNull(CategoryAddResponse),
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

export const CategoryDelete = mutationField('categoryDelete', {
  type: nonNull(CategoryDeleteResponse),
  args: {
    input: nonNull(CategoryDeleteInput),
  },
  async resolve(root, args, context) {
    const session = await context.getSession()

    if (!session?.username) {
      return Promise.reject(new Error('请登录后再操作'))
    }

    // TODO 校验分类下是否还有文章
    await context.prisma.category.delete({
      where: {
        id: args.input.id,
      },
    })

    return {
      message: '已删除',
    }
  },
})
