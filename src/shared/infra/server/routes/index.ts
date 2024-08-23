import { Router } from 'express';

import { surveyRouter } from './survey.routes';

const routes = Router();

routes.use('/survey', surveyRouter);

export { routes };
