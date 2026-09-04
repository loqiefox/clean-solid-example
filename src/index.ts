import { buildApp } from './buildApp'

const app = buildApp()

async function start() {
  try {
    const address = await app.listen({ host: '0.0.0.0', port: 3000 })
    console.log(`Сервер слушает ${address}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
