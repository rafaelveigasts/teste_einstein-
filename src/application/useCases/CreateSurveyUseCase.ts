import { Survey } from "@prisma/client";
import { CreateSurveyDTO } from "../controllers/dto/CreateSurveyDTO";
import { ISurveyRepository } from "../repository/SurveyRepository";
import { ICreateSurveyUseCase } from "./interfaces/ICreateSurveyUseCase";
import { inject, injectable } from "tsyringe";



@injectable()
export class CreateSurveyUseCase implements ICreateSurveyUseCase{
  constructor(
    @inject("ISurveyRepository")
    private surveyRepository: ISurveyRepository
  ){}

  async execute(data: CreateSurveyDTO): Promise<Survey> {


    const survey = await this.surveyRepository.create({ 
      title: data.title,
      target_audience: data.target_audience
    });


    return survey;
  }

}