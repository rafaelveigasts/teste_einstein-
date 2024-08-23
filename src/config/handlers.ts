import { errorHandler } from '../shared/errors/errorHandler'
import { Express } from 'express'

export default (app: Express): void => {
  app.use(errorHandler)
}
