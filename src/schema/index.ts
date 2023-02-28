import path from 'path'

import { makeSchema } from 'nexus'
import NexusPrismaScalars from 'nexus-prisma/scalars'

import * as User from './user'

export const schema = makeSchema({
  types: [NexusPrismaScalars, User],
  outputs: {
    schema: path.join(__dirname, '..', 'generated', 'schema.graphql'),
    typegen: path.join(__dirname, '..', 'generated', 'typegen.ts'),
  },
  contextType: {
    module: path.join(__dirname, 'context.ts'),
    export: 'Context',
  },
  // sourceTypes: {
  //   modules: [
  //     {
  //       module: path.join(__dirname, 'typeDefs.ts'),
  //       alias: 't',
  //     },
  //   ],
  // },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  prettierConfig: require('@fruits-chain/prettier-config-preset'),
})
