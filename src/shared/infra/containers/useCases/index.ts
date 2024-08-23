import { container } from "tsyringe";

import { CreateSurveyUseCase } from "@modules/survey/useCases/CreateSurveyUseCase";
import {ICreateSurveyUseCase } from "@modules/survey/useCases/ICreateSurveyUseCase";

container.registerSingleton<ICreateSurveyUseCase>(
  "ICreateSurveyUseCase",
  CreateSurveyUseCase
);
