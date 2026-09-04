import Fastify, { type FastifyInstance } from 'fastify'
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod'

import { buildApplication } from '@/application'
import { applyErrorHandler } from '@/interface/http/errorHandler'
import routes from '@/interface/routes/index.route'

// Композиционный корень: собирает слои и отдаёт Fastify-приложение.
export function buildApp(): FastifyInstance {
  const services = buildApplication()

  const app = Fastify({ logger: true })
  app.setValidatorCompiler(validatorCompiler)
  app.setSerializerCompiler(serializerCompiler)
  app.decorate('services', services)

  applyErrorHandler(app)

  app.register(routes, { prefix: '/' })

  return app
}
