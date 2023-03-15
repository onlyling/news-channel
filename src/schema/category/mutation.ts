import { mutationField, nonNull } from 'nexus'

import { MessageResponse } from '../common/types'

import { CategoryAddInput, Category, CategoryDeleteInput } from './types'

export const CategoryAdd = mutationField('categoryAdd', {
  type: nonNull(Category),
  args: {
    input: nonNull(CategoryAddInput),
  },
  async resolve(root, args, context) {
    await context.checkAdminPrivilege()

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

      return category
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

      return category
    }
  },
})

export const CategoryDelete = mutationField('categoryDelete', {
  type: nonNull(MessageResponse),
  args: {
    input: nonNull(CategoryDeleteInput),
  },
  async resolve(root, args, context) {
    await context.checkAdminPrivilege()

    const p = await context.prisma.post.findFirst({
      where: {
        categoryId: args.input.id,
      },
    })

    if (p) {
      return Promise.reject(new Error('改分类下还有数据，不能删除'))
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
