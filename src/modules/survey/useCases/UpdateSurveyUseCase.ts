import { Survey } from "@prisma/client";
import { ISurveyRepository, UpdateSurveyInput } from "../repository/SurveyRepository";
import { inject, injectable } from "tsyringe";
import { IUpdateSurveyUseCase } from "./interfaces/IUpdateSurveyUseCase";


@injectable()
export class UpdateSurveyUseCase implements IUpdateSurveyUseCase{
  constructor(
    @inject("ISurveyRepository")
    private surveyRepository: ISurveyRepository
  ){}

  async execute({id, star_quantity, email}: UpdateSurveyInput): Promise<Survey> {
    console.log('usecase')
    

    const survey = await this.surveyRepository.update({ 
      id,
      email,
      star_quantity,
    });


    return survey;
  }
}