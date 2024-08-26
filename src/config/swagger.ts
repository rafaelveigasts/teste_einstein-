import swaggerconfig, { options } from '../docs'
import { serve, setup } from 'swagger-ui-express'
import { Express } from 'express'

export default (app: Express): void => {
  app.use('/teste_einstein/docs',  serve, setup(swaggerconfig, options))
}
