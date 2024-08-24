import EHttpStatusCode from './EHttpStatusCode'
import { ErrorModel } from './ErrorModel'

export class InternalServerError extends ErrorModel {
  constructor(message: string, data?: any) {
    super({
      status: EHttpStatusCode.INTERNAL_SERVER_ERROR,
      message,
      aditionalInfo: data
    })
  }
}
