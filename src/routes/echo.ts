import type { FastifyPluginAsyncZod } from '@fastify/type-provider-zod';
import { echoText } from '../services/echo';
import { echoBodySchema } from '../schemas/echo';

export const echoRoutes: FastifyPluginAsyncZod = async (fastify) => {
  fastify.post(
    '/echo',
    {
      schema: {
        body: echoBodySchema,
      },
    },
    async (request) => {
      const result = echoText(request.body.message);
      return result;
    }
  );
};
