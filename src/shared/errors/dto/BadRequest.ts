import EHttpStatusCode from '../../errors/dto/EHttpStatusCode'
import { ErrorModel } from './ErrorModel'

export class BadRequest extends ErrorModel {
  constructor(message: string, data?: any) {
    super({
      status: EHttpStatusCode.BAD_REQUEST,
      message,
      aditionalInfo: data
    })
  }
}
