import EHttpStatusCode from "@shared/errors/dto/EHttpStatusCode";
import { ErrorModel } from "@shared/errors/dto/ErrorModel";

export class PayloadError extends ErrorModel {
  constructor(message: string) {
    super({
      status: EHttpStatusCode.BAD_REQUEST,
      message,
      aditionalInfo: 'Payload Error'
    })
  }
}
