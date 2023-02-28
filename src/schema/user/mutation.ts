import { mutationField, nonNull } from 'nexus'

import { LoginInput, LoginResponse } from './types'

export const Login = mutationField('login', {
  type: LoginResponse,
  args: {
    input: nonNull(LoginInput),
  },
  resolve(root, args, context) {
    console.log('args =->', args)
    // ...
    return Promise.resolve({
      token: '1234',
    })
  },
})
