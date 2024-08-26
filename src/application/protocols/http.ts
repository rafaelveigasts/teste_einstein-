import { IBrandInfo } from '../dto/IBrandInfo'
import { TUserToToken } from '../dto/TPatientLogin'

export interface HttpResponse {
  statusCode: number
  body: any
  headers?: any
}

export interface HttpRequest {
  body?: any
  headers?: any
  params?: any
  query?: any
  brand: IBrandInfo
  user: TUserToToken
  file?: Express.Multer.File
}
