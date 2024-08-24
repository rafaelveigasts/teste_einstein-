import { Survey } from "@prisma/client";
import { ISurveyRepository, ListSurveyInput } from "../repository/SurveyRepository";
import { inject, injectable } from "tsyringe";
import { IListSurveyUseCase } from "./interfaces/IListSurveyUseCase";


@injectable()
export class ListSurveyUseCase implements IListSurveyUseCase{
  constructor(
    @inject("ISurveyRepository")
    private surveyRepository: ISurveyRepository
  ){}

  async execute({target_audience, direction}: ListSurveyInput): Promise<Survey[]> {
    console.log('usecase')
    

    const surveys = await this.surveyRepository.list({
      target_audience,
      direction
    });

    return surveys
  }
}