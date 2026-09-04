import type { FastifyRequest } from 'fastify/types/request'
import { z } from 'zod'
import type { dayTypeQuerySchema } from '@/interface/schemas/dayType'

type DayTypeQuery = z.infer<typeof dayTypeQuerySchema>

export async function dayTypeController(request: FastifyRequest<{ Querystring: DayTypeQuery }>) {
  const { services } = request.server

  const dayType = await services.useCases.dayType(request.query.date)

  return { dayType }
}
