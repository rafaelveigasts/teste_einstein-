import { Survey } from "@prisma/client";
import {  ListSurveyInput } from "../../repository/SurveyRepository";

export interface IListSurveyUseCase {
  execute({ target_audience, direction }: ListSurveyInput): Promise<Survey[]>;
}