import swaggerconfig, { options } from '../shared/docs'
import { serve, setup } from 'swagger-ui-express'
import { Express } from 'express'

export default (app: Express): void => {
  app.use('/grand-line-api/docs',  serve, setup(swaggerconfig, options))
}
