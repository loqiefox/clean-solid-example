import type { FastifyRequest } from 'fastify/types/request'
import { z } from 'zod'
import type { helloQuerySchema } from '@/interface/schemas/hello'

type HelloQuery = z.infer<typeof helloQuerySchema>

export async function helloController(request: FastifyRequest<{ Querystring: HelloQuery }>) {
  const { services } = request.server
  const name = request.query.name

  const message = await services.useCases.greet(name)

  return { message }
}
