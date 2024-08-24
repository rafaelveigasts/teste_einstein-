import express from 'express'
import setupMiddlewares from './middlewares'
import setupRouters from './routes'
import setupHandlers from './handlers'
// import setupSwagger from './swagger'
import statusMonitor from './statusMonitor'

const app = express()
statusMonitor(app)
// setupSwagger(app)
setupMiddlewares(app)
setupRouters(app)
setupHandlers(app)

export default app
