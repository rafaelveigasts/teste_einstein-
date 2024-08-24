import { NextFunction, Request, Response } from 'express'
import { ErrorModel } from './dto/ErrorModel'
import { logger } from '../logger/logger'

type TLogHTTPErrorObject = {
  functionName: string
  fileName: string
  aditionalInfo?: any
}

export async function errorHandler(
  error: any,
  _: Request,
  response: Response,
  next: NextFunction
) {
  let errorToHandle: ErrorModel = error

  const isErrorCustom = error instanceof ErrorModel
  if (!isErrorCustom) {
    errorToHandle = new ErrorModel({ error: error })
  }

  const functionName = errorToHandle.getFunctionName()
  const fileName = errorToHandle.getFileName()
  const status = errorToHandle.getStatus()
  const aditionalInfo = errorToHandle.aditionalInfo

  const logError: TLogHTTPErrorObject = {
    functionName,
    fileName,
    aditionalInfo
  }

  logger.error(errorToHandle.message, {
    from: 'HTTP',
    data: logError,
    message: `[${status}] - ${errorToHandle.message}`
  })

  response.status(status).json({ message: errorToHandle.message })
  next()
}
