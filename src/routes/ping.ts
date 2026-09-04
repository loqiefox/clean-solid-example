import type { FastifyPluginAsyncZod } from '@fastify/type-provider-zod';

export const pingRoutes: FastifyPluginAsyncZod = async (fastify) => {
  fastify.get('/ping', async () => {
    return { ok: true };
  });
};
