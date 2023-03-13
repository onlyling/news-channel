import fs from 'node:fs/promises'
import path from 'node:path'

import { queryField, objectType } from 'nexus'

import { SCHEMA_GRAPHQL } from '../../config'

// import SCHEMA_GRAPHQL_DATA from '../../generated/schema.graphql'

export const _service = queryField('_service', {
  type: objectType({
    name: '_service',
    definition(t) {
      t.nonNull.string('sdl')
    },
  }),
  args: {},
  async resolve(root, args, context) {
    const data = await fs.readFile(path.resolve(process.cwd(), SCHEMA_GRAPHQL))

    return {
      // sdl: SCHEMA_GRAPHQL_DATA,
      sdl: data.toString(),
    }
  },
})
