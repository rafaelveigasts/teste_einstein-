import morgan, { StreamOptions } from 'morgan'
import { Request, Response } from 'express'
import { applicationConfig } from '../../config/application'
import { logger } from './logger'

const morganFormat = applicationConfig.env == 'development' ? 'tiny' : 'short'
const stream: StreamOptions = {
  write: (message: string) => {
    logger.info(message)
  }
}

const skip = function (req: Request, res: Response) {
  return req.originalUrl.startsWith('/api/health') && res.statusCode < 400
}

export const morganMiddleware = morgan(morganFormat, {
  skip: skip,
  stream: stream
})
