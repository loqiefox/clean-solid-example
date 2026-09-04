import { buildApp } from './app';

async function start() {
  const fastify = buildApp();

  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Сервер слушает :3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
