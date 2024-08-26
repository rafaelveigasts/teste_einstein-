import 'express-async-errors'
import 'reflect-metadata'
import './utils/module-alias'
import './shared/enviroment/dotenv'
import './infra/containers'

export const startApp = async () => {
  const app = (await import('./config/app')).default
return app
}
