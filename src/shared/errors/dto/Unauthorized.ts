import EHttpStatusCode from './EHttpStatusCode'
import { ErrorModel } from './ErrorModel'

export class Unauthorized extends ErrorModel {
  constructor(message: string, data?: any) {
    super({
      status: EHttpStatusCode.UNAUTHORIZED,
      message,
      aditionalInfo: data
    })
  }
}
