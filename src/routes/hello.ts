import type { FastifyPluginAsyncZod } from '@fastify/type-provider-zod';
import { buildGreeting } from '../services/greeting';
import { helloQuerySchema } from '../schemas/hello';

export const helloRoutes: FastifyPluginAsyncZod = async (fastify) => {
  fastify.get(
    '/hello',
    {
      schema: {
        querystring: helloQuerySchema,
      },
    },
    async (request) => {
      const message = buildGreeting(request.query.name);
      return { message };
    }
  );
};
