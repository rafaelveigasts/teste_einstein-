import EHttpStatusCode from './EHttpStatusCode'
import { ErrorModel } from './ErrorModel'

export class Forbidden extends ErrorModel {
  constructor(message: string, data?: any) {
    super({
      status: EHttpStatusCode.FORBIDDEN,
      message,
      aditionalInfo: data
    })
  }
}
