import { mutationField, nonNull } from 'nexus'

import { MessageResponse } from '../common/types'

import { LoginInput } from './types'

export const Login = mutationField('login', {
  type: nonNull(MessageResponse),
  args: {
    input: nonNull(LoginInput),
  },
  async resolve(root, args, context) {
    console.log('args =->', args)
    const user = await context.prisma.user.findFirst({
      where: {
        username: args.input.username,
      },
    })

    if (!user) {
      return Promise.reject(new Error('用户不存在'))
    }

    if (user.password !== args.input.password) {
      return Promise.reject(new Error('用户名或密码不正确'))
    }

    // 创建 session
    await context.setSession(user)

    return {
      message: '登录成功',
    }
  },
})
