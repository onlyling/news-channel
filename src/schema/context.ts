import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export interface Context {
  prisma: PrismaClient
  req: NextApiRequest
  res: NextApiResponse
}

export const prisma = new PrismaClient()
