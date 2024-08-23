import { container } from "tsyringe";

import { PrismaSurveyRepository } from "@shared/infra/database/prisma/repositories/prisma-survey-repository";
import { ISurveyRepository } from "@modules/survey/repository/SurveyRepository";

container.registerSingleton<ISurveyRepository>(
  "ISurveyRepository",
  PrismaSurveyRepository
);
