import { container } from "tsyringe";

import { CreateSurveyUseCase } from "@modules/survey/useCases/CreateSurveyUseCase";
import {ICreateSurveyUseCase } from "@modules/survey/useCases/interfaces/ICreateSurveyUseCase";
import { IUpdateSurveyUseCase } from "@modules/survey/useCases/interfaces/IUpdateSurveyUseCase";
import { UpdateSurveyUseCase } from "@modules/survey/useCases/UpdateSurveyUseCase";

container.registerSingleton<ICreateSurveyUseCase>(
  "ICreateSurveyUseCase",
  CreateSurveyUseCase
);

container.registerSingleton<IUpdateSurveyUseCase>(
  "IUpdateSurveyUseCase",
  UpdateSurveyUseCase
);
