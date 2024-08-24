import { container } from "tsyringe";

import { CreateSurveyUseCase } from "@modules/survey/useCases/CreateSurveyUseCase";
import {ICreateSurveyUseCase } from "@modules/survey/useCases/interfaces/ICreateSurveyUseCase";
import { IUpdateSurveyUseCase } from "@modules/survey/useCases/interfaces/IUpdateSurveyUseCase";
import { UpdateSurveyUseCase } from "@modules/survey/useCases/UpdateSurveyUseCase";
import { IListSurveyUseCase } from "@modules/survey/useCases/interfaces/IListSurveyUseCase";
import { ListSurveyUseCase } from "@modules/survey/useCases/ListSurveyUseCase";

container.registerSingleton<ICreateSurveyUseCase>(
  "ICreateSurveyUseCase",
  CreateSurveyUseCase
);

container.registerSingleton<IUpdateSurveyUseCase>(
  "IUpdateSurveyUseCase",
  UpdateSurveyUseCase
);

container.registerSingleton<IListSurveyUseCase>(
  "IListSurveyUseCase",
  ListSurveyUseCase
);
