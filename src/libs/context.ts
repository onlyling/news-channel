import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export interface Session {
  id: number
  username: string
}

type GetSession = () => Promise<Session | undefined>

type SetSession = (t: Session) => Promise<void>

export interface Context {
  prisma: PrismaClient
  req: NextApiRequest
  res: NextApiResponse
  getSession: GetSession
  setSession: SetSession
}

export const prisma = new PrismaClient()
