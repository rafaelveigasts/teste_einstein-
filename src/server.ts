import http from 'http'
import { startApp } from './app'
import { applicationConfig } from './config/application'
import { logger } from './shared/logger/logger'

const serverStartup = async () => {
  await startApp()

  const app = (await import('./config/app')).default
  const server: http.Server = http.createServer(app)

  server.listen(applicationConfig.port, () => {
    logger.info(`Server is running in the port ${applicationConfig.port}!`)
  })
}

serverStartup()
