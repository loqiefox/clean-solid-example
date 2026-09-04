import Fastify from 'fastify';
import {
  type ZodTypeProvider,
  validatorCompiler,
  serializerCompiler,
} from '@fastify/type-provider-zod';
import { pingRoutes } from './routes/ping';
import { helloRoutes } from './routes/hello';
import { dayTypeRoutes } from './routes/day-type';
import { echoRoutes } from './routes/echo';

export function buildApp() {
  const fastify = Fastify({ logger: true }).withTypeProvider<ZodTypeProvider>();

  fastify.setValidatorCompiler(validatorCompiler);
  fastify.setSerializerCompiler(serializerCompiler);

  fastify.register(pingRoutes);
  fastify.register(helloRoutes);
  fastify.register(dayTypeRoutes);
  fastify.register(echoRoutes);

  return fastify;
}
