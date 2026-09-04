import type { ApplicationContainer } from '@/application'

declare module 'fastify' {
  interface FastifyInstance {
    services: ApplicationContainer
  }
}
