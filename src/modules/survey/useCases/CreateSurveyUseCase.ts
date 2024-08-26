import { Survey } from "@prisma/client";
import { CreateSurveyDTO, TargetAudience } from "../controllers/dto/CreateSurveyDTO";
import { ISurveyRepository } from "../repository/SurveyRepository";
import { ICreateSurveyUseCase } from "./interfaces/ICreateSurveyUseCase";
import { inject, injectable } from "tsyringe";
// import { ConflictError } from "@shared/errors/conflict-error";

@injectable()
export class CreateSurveyUseCase implements ICreateSurveyUseCase{
  constructor(
    @inject("ISurveyRepository")
    private surveyRepository: ISurveyRepository
  ){}

  async execute(data: CreateSurveyDTO): Promise<Survey> {
    console.log('usecase')
    // const surveyAlreadyExists = await this.surveyRepository.findByTitle(data.title);

    // if (surveyAlreadyExists) {
    //   throw new ConflictError('Survey already exists');
    // }

    const survey = await this.surveyRepository.create({ 
      title: data.title,
      target_audience: data.target_audience
    });


    return survey;
  }
}