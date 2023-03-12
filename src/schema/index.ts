import path from 'path'

import { makeSchema } from 'nexus'
import NexusPrismaScalars from 'nexus-prisma/scalars'

import { SCHEMA_GRAPHQL, TYPEGEN_TS } from '../../config'

import * as _Service from './_service'
import * as User from './user'

export const schema = makeSchema({
  types: [NexusPrismaScalars, _Service, User],
  outputs: {
    schema: path.resolve(__dirname, '../..', SCHEMA_GRAPHQL),
    typegen: path.resolve(__dirname, '../..', TYPEGEN_TS),
  },
  contextType: {
    module: path.join(__dirname, '../libs', 'context.ts'),
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