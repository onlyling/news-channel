import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'

import { getLoginSession, setLoginSession } from '../../libs/auth'
import type { Context, Session } from '../../libs/context'
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
    checkAdminPrivilege: async () => {
      const s = (await getLoginSession(req)) as Session | undefined

      if (!s?.username) {
        throw new Error('请登录后再操作')
      }
    },
  }),
})
