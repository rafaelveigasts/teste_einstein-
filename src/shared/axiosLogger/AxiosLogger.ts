import { AxiosResponse } from 'axios'
import { logger } from '../logger/logger'

export const axiosLogger = async (
  axiosRequest: Promise<AxiosResponse>
): Promise<AxiosResponse<any, any> | null> => {
  let response = null

  await axiosRequest
    .then((resp: AxiosResponse) => {
      response = resp
      const getResponse = getResponseDescription(resp)
      const timeDuration = resp.headers['request-duration']

      if (parseInt(timeDuration || '0') > 10000 && resp) {
        const { config } = resp
        const { baseURL, url, headers } = config
        //@ts-ignore
        const params = JSON.parse(headers?.parametros)
        //@ts-ignore
        const subdomain: string = headers?.dominio
        logger.warn({
          environment: process.env.ENVIRONMENT,
          subdomain,
          url: `${baseURL}${url}`,
          parameter: params,
          timeDuration
        })
      } else {
        const responseDescription = response ? getResponse : ''
        logger.info(`AXIOS SUCCESS - ${responseDescription}`)
      }
    })
    .catch(err => {
      console.log(err)
      const errResponse = err.response

      let logErrorMsg = err

      if (errResponse) {
        const responseDescription = err ? getResponseDescription(errResponse) : ''
        logErrorMsg = `AXIOS ERROR - ${responseDescription}`
      }

      logger.error(logErrorMsg)
    })

  return response
}

const getResponseDescription = (response: AxiosResponse): string => {
  const { status, config, headers } = response
  const { url, method } = config
  //@ts-ignore
  const subdomain: string = config?.headers?.dominio
  return `${method?.toUpperCase() ?? ''} - ${url ?? ''} - ${status ?? ''} - ${
    headers['request-duration'] + ' ms' ?? ''
  } - ${subdomain}`
}
