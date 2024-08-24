import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'
import { NextFunction, Request, Response } from 'express'
import { PayloadError } from '../../helpers/payloadError'

type RequestValidate = {
  headers?: any
  body?: any
  params?: any
  query?: any
}

export const validateDTO = (requestToValidate: RequestValidate) => {
  return async function (req: Request, res: Response, next: NextFunction) {
    const allErrors = []
    const validateKeys = Object.keys(requestToValidate) as [keyof RequestValidate]

    for (const validationKey of validateKeys) {
      const dtoToValidate = requestToValidate[validationKey]

      if (dtoToValidate) {
        const requestObjectToValidate = req[validationKey]
        const output: any = plainToInstance(dtoToValidate, requestObjectToValidate)

        const errors = await validate(output, { skipMissingProperties: true })
        if (errors.length > 0) {
          // eslint-disable-next-line @typescript-eslint/no-array-constructor
          let errorTexts = Array()

          for (const errorItem of errors) {
            errorTexts = errorTexts.concat(errorItem.constraints || errorItem.children)
          }

          allErrors.push({
            [validationKey]: errorTexts
          })
        }
      }
    }

    if (allErrors.length > 0) {
      console.log(JSON.stringify(allErrors, null, 2))
      
      //@ts-ignore
      throw new PayloadError(allErrors)
    } else {
      // res.locals.input = output
      next()
    }
  }
}
