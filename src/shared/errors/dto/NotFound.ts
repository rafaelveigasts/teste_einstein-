import EHttpStatusCode from './EHttpStatusCode'
import { ErrorModel } from './ErrorModel'

export class NotFound extends ErrorModel {
  constructor(message: string, data?: any) {
    super({
      status: EHttpStatusCode.NOT_FOUND,
      message,
      aditionalInfo: data
    })
  }
}
