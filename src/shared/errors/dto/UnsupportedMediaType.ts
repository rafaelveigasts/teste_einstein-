import EHttpStatusCode from './EHttpStatusCode'
import { ErrorModel } from './ErrorModel'

export class UnsupportedMediaType extends ErrorModel {
  constructor(message: string, data?: any) {
    super({
      status: EHttpStatusCode.UNSUPPORTED_MEDIA_TYPE,
      message,
      aditionalInfo: data
    })
  }
}
