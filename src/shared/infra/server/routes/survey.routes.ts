import { CreateSurveyController } from '@modules/survey/controllers/CreateSurveyController';
import { adaptRoute } from '@shared/adapter/express-adapter-route';
import {  Router } from 'express';
import { container } from 'tsyringe';

const surveyRouter = Router();

const createSurveyController = container.resolve(CreateSurveyController);

export default (router: Router): void => {
  router.post('/survey', adaptRoute(createSurveyController));
}