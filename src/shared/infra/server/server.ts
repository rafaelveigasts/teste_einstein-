import http from 'http';

import { env} from '../../../config/env';
import { createTerminus } from '@godaddy/terminus';
import { Logger } from '@shared/infra/logging/logger';

import { app } from '../../../app';

const server = http.createServer(app);

const onSignal = () => {
  Logger.info('server is starting cleanup');
  return Promise.resolve();
};

const onShutdown = () => {
  Logger.info('cleanup finished, server is shutting down');
  return Promise.resolve();
};

const onHealthCheck = () => {
  return Promise.resolve('UP');
};

const terminusConfiguration = Object.freeze({
  logger: Logger.info,
  signal: 'SIGINT',
  healthChecks: {
    '/healthcheck': onHealthCheck,
  },
  onSignal,
  onShutdown,
});

createTerminus(server, terminusConfiguration);
server.listen(env.PORT, () =>
  Logger.info(`Magic happens on port ${env.PORT}`)
);
