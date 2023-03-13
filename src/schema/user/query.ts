import { queryField } from 'nexus'

import { MeResponse } from './types'

export const Me = queryField('me', {
  type: MeResponse,
  async resolve(root, args, context) {
    const session = await context.getSession()
    return session || {}
  },
})
