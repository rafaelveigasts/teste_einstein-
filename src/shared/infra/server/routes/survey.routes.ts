import { CreateSurveyController } from '@modules/survey/controllers/CreateSurveyController';
import {  Router } from 'express';

const surveyRouter = Router();

const createSurveyController = new CreateSurveyController();

surveyRouter.post('/', createSurveyController.handle);


export { surveyRouter };