import { Survey } from "@prisma/client";
import { CreateSurveyInput } from "../../repository/SurveyRepository";

export interface ICreateSurveyUseCase {
  execute({ title, target_audience }: CreateSurveyInput): Promise<Survey>;
}