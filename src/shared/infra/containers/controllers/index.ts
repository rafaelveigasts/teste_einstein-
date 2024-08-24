import { container } from "tsyringe";
import { Controller } from "@shared/infra/helpers/protocols";
import { CreateSurveyController } from "@modules/survey/controllers/CreateSurveyController";

container.registerSingleton<Controller>('ICreateSurveyController', CreateSurveyController);