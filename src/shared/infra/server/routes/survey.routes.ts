import { validateDTO } from '@middlewares/requestValidation';
import { CreateSurveyController } from '@modules/survey/controllers/CreateSurveyController';
import { CreateSurveyDTO } from '@modules/survey/controllers/dto/CreateSurveyDTO';
import { ListSurveyController } from '@modules/survey/controllers/ListSurveyController';
import { UpdateSurveyController } from '@modules/survey/controllers/UpdateSurveyController';
import { adaptRoute } from '@shared/adapter/express-adapter-route';
import {  Router } from 'express';
import { container } from 'tsyringe';


const createSurveyController = container.resolve(CreateSurveyController);
const updateSurveyController = container.resolve(UpdateSurveyController);
const listSurveyController = container.resolve(ListSurveyController);


export default (router: Router): void => {
  router.post('/survey', 
  //   validateDTO({
  //   body: CreateSurveyDTO
  // }), 
  adaptRoute(createSurveyController));

  router.put('/survey',
    adaptRoute(updateSurveyController));

    router.get('/survey', adaptRoute(listSurveyController));
}