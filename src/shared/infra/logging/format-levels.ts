import { format } from 'winston';

const { splat, printf, combine, colorize, timestamp } = format;

const colors = () =>
  colorize({
    all: true,
    colors: Object.freeze({
      trace: 'green',
      info: 'blue',
      warn: 'yellow',
      error: 'red',
      fatal: 'red',
    }),
  });

const upperCaseLevel = format((info) => {
  const Info = info;
  Info.level = info.level.toUpperCase();
  return Info;
});

const rockyBalboaFormat = () =>
  printf(
    // eslint-disable-next-line no-shadow
    ({ level, message, timestamp }) =>
      `[${timestamp}] ${level} - [Teste Einstein]: ${message}`
  );

const config = Object.freeze({
  levels: {
    trace: 0,
    info: 1,
    warn: 2,
    error: 3,
    fatal: 4,
  },
  colors,
  rockyBalboaFormat,
});

const combineLogFormats = (...formats: any): any =>
  combine(upperCaseLevel(), timestamp(), splat(), ...formats);

export { config, combineLogFormats };
