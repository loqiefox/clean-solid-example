import type { FastifyRequest } from 'fastify/types/request'
import type { FastifyReply } from 'fastify/types/reply'
import { z } from 'zod'
import type { echoBodySchema } from '@/interface/schemas/echo'

type EchoBody = z.infer<typeof echoBodySchema>

export async function echoController(
  request: FastifyRequest<{ Body: EchoBody }>,
  reply: FastifyReply
) {
  const { services } = request.server

  const result = await services.useCases.echo(request.body.message)

  return reply.status(200).send(result)
}
