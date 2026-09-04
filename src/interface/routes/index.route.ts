import type { FastifyPluginAsync } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'

import { pingController } from '@/interface/controllers/ping.controller'
import { helloController } from '@/interface/controllers/hello.controller'
import { dayTypeController } from '@/interface/controllers/dayType.controller'
import { echoController } from '@/interface/controllers/echo.controller'
import { helloQuerySchema } from '@/interface/schemas/hello'
import { dayTypeQuerySchema } from '@/interface/schemas/dayType'
import { echoBodySchema } from '@/interface/schemas/echo'

const route: FastifyPluginAsync = async (app) => {
  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'GET',
    url: '/ping',
    handler: pingController,
  })

  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'GET',
    url: '/hello',
    schema: {
      querystring: helloQuerySchema,
    },
    handler: helloController,
  })

  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'GET',
    url: '/day-type',
    schema: {
      querystring: dayTypeQuerySchema,
    },
    handler: dayTypeController,
  })

  app.withTypeProvider<ZodTypeProvider>().route({
    method: 'POST',
    url: '/echo',
    schema: {
      body: echoBodySchema,
    },
    handler: echoController,
  })
}

export default route
