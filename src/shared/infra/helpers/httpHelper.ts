import { ServerError } from './serverError'
import { HttpResponse } from '../helpers/protocols'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(String(error.stack))
})

export const ok = (data: any, headers?: any): HttpResponse => ({
  statusCode: 200,
  body: data,
  headers
})

export const okNoContent = (body?: any, headers?: any): HttpResponse => ({
  statusCode: 200,
  body,
  headers
})

export const createdOk = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data
})

export const unauthorized = (error: Error): HttpResponse => ({
  statusCode: 401,
  body: error
})

export const noContent = (body?: any): HttpResponse => ({
  statusCode: 204,
  body
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error
})

export const redirect = (url: string): HttpResponse => ({
  statusCode: 302,
  body: {},
  headers: {
    Location: url
  }
})
