import { nonNull, queryField } from 'nexus'

import { MeResponse } from './types'

export const Me = queryField('me', {
  type: nonNull(MeResponse),
  async resolve(root, args, context) {
    const session = await context.getSession()
    return session || {}
  },
})
