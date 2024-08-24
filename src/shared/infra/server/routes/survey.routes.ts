import { validateDTO } from '@middlewares/requestValidation';
import { CreateSurveyController } from '@modules/survey/controllers/CreateSurveyController';
import { CreateSurveyDTO } from '@modules/survey/controllers/dto/CreateSurveyDTO';
import { adaptRoute } from '@shared/adapter/express-adapter-route';
import {  Router } from 'express';
import { container } from 'tsyringe';


const createSurveyController = container.resolve(CreateSurveyController);

export default (router: Router): void => {
  router.post('/survey', 
  //   validateDTO({
  //   body: CreateSurveyDTO
  // }), 
  adaptRoute(createSurveyController));
}