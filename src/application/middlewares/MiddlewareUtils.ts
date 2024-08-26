import { validateDTO } from './requestValidation'

export class MiddlewareUtils {
  /** Responsible to check if the request properties are as expected  */
  static requestValidation = validateDTO
}
