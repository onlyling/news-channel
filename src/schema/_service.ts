import { queryField, objectType } from 'nexus'

import SCHEMA_GRAPHQL_DATA from '../../generated/schema.graphql'

export const _service = queryField('_service', {
  type: objectType({
    name: '_service',
    definition(t) {
      t.nonNull.string('sdl')
    },
  }),
  args: {},
  async resolve(root, args, context) {
    return {
      sdl: SCHEMA_GRAPHQL_DATA,
    }
  },
})
