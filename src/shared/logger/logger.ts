import winston, { format } from 'winston'
import TransportStream from 'winston-transport'

const { combine, splat, timestamp, label } = format

const winstonTransports: TransportStream[] = [
  new winston.transports.Console({
    level: 'silly',
    format: combine(
      splat(),
      timestamp(),
      label({ label: process.env.NODE_ENV }),
      process.env.NODE_ENV === 'production' ? format.json() : format.prettyPrint()
    )
  })
]

export const logger = winston.createLogger({
  exitOnError: false,
  transports: winstonTransports
})
