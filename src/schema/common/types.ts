import { inputObjectType, objectType } from 'nexus'

export const Page = inputObjectType({
  name: 'Page',
  definition(t) {
    t.nonNull.int('pageCurrent')
    t.nonNull.int('pageSize')
  },
})

export const MessageResponse = objectType({
  name: 'MessageResponse',
  definition(t) {
    t.nonNull.string('message')
  },
})
