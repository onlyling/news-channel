import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'

import { getLoginSession, setLoginSession } from '../../libs/auth'
import type { Context } from '../../libs/context'
import { prisma } from '../../libs/context'
import { schema } from '../../schema'

const apolloServer = new ApolloServer<Context>({ schema })

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({
    req,
    res,
    prisma,
    getSession: () => getLoginSession(req),
    setSession: t => setLoginSession(res, t),
  }),
})
