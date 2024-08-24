import { Survey } from "@prisma/client";
import { CreateSurveyInput, UpdateSurveyInput } from "../../repository/SurveyRepository";

export interface IUpdateSurveyUseCase {
  execute({id, email, star_quantity  }: UpdateSurveyInput): Promise<Survey>;
}