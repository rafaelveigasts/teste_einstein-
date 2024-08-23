import { transports, createLogger } from 'winston';

import { config, combineLogFormats } from './format-levels';

const { Console } = transports;
const { colors, rockyBalboaFormat } = config;

export const Logger = createLogger({
  level: 'info',
  exitOnError: false,
  transports: [
    new Console({
      format: combineLogFormats(colors(), rockyBalboaFormat()),
    }),
  ],
});
