import type { FastifyPluginAsyncZod } from '@fastify/type-provider-zod';
import { classifyDay } from '../services/day-type';
import { dayTypeQuerySchema } from '../schemas/day-type';

export const dayTypeRoutes: FastifyPluginAsyncZod = async (fastify) => {
  fastify.get(
    '/day-type',
    {
      schema: {
        querystring: dayTypeQuerySchema,
      },
    },
    async (request) => {
      const dayType = classifyDay(request.query.date);
      return { dayType };
    }
  );
};
