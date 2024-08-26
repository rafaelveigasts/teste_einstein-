import * as https from 'https'
import { applicationConfig } from './application'

const rejectUnauthorized = applicationConfig.env == 'staging' ? false : true

export const httpsAgent: https.Agent = new https.Agent({
  rejectUnauthorized
})
