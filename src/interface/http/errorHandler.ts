import { hasZodFastifySchemaValidationErrors } from 'fastify-type-provider-zod'
import type { FastifyError, FastifyInstance } from 'fastify'

export function applyErrorHandler(app: FastifyInstance): void {
  app.setErrorHandler(async (error: FastifyError, request, reply) => {
    request.log.error(error)

    if (hasZodFastifySchemaValidationErrors(error)) {
      return await reply.status(400).send({
        error: { message: 'Ошибка валидации запроса' },
      })
    }

    return await reply.status(500).send({
      error: { message: 'Внутренняя ошибка сервера' },
    })
  })
}
