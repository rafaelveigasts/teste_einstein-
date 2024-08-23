/* eslint-disable no-multi-assign */
import { Express, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from '@shared/infra/swagger';

export function useSwaggerDocs(app: Express): void {
  const options = {
    swaggerOptions: {
      url: '/teste/docs/swagger.json',
    },
  } as swaggerUi.SwaggerUiOptions;

  app.get('/teste/docs/swagger.json', (_request: Request, response: Response) =>
    response.json(swaggerFile)
  );

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(undefined, options));
}
