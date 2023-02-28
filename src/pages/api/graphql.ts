import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'

import { schema } from '../../schema'
import type { Context } from '../../schema/context'
import { prisma } from '../../schema/context'

const apolloServer = new ApolloServer<Context>({ schema })

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
})
