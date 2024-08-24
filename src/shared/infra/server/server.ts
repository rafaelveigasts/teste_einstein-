import http from 'http';
import { startApp } from 'src/app';
import { applicationConfig } from '@config/application';
import { Logger } from '@shared/infra/logging/logger';

const serverStarup = async () => {
  await startApp();

  const app = (await import('../../../config/app')).default;
  const server: http.Server = http.createServer(app);

  server.listen(applicationConfig.port, () => {
    Logger.info(`Server started on port ${applicationConfig.port}`);
  })
}

serverStarup().catch((error) => {
  Logger.error(`Error starting server: ${error}`);
  process.exit(1);
});
