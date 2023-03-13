import { inputObjectType } from 'nexus'

export const Page = inputObjectType({
  name: 'Page',
  definition(t) {
    t.nonNull.int('pageCurrent')
    t.nonNull.int('pageSize')
  },
})
