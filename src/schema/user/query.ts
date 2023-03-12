import { queryField } from 'nexus'

import { MeResponse } from './types'

export const Me = queryField('me', {
  type: MeResponse,
  args: {},
  async resolve(root, args, context) {
    const session = await context.getSession()
    return session || {}
  },
})
