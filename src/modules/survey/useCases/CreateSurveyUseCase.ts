import { Survey } from "@prisma/client";
import { CreateSurveyDTO, TargetAudience } from "../controllers/dto/CreateSurveyDTO";
import { ISurveyRepository } from "../repository/SurveyRepository";
import { ICreateSurveyUseCase } from "./interfaces/ICreateSurveyUseCase";
import { inject, injectable } from "tsyringe";
import { BadRequest } from "@shared/errors/dto/BadRequest";
// import { ConflictError } from "@shared/errors/conflict-error";

@injectable()
export class CreateSurveyUseCase implements ICreateSurveyUseCase{
  constructor(
    @inject("ISurveyRepository")
    private surveyRepository: ISurveyRepository
  ){}

  async execute(data: CreateSurveyDTO): Promise<Survey> {
    

    await this.validate(data);

    const survey = await this.surveyRepository.create({ 
      title: data.title,
      target_audience: data.target_audience
    });


    return survey;
  }

  private async validate(data: CreateSurveyDTO): Promise<void> {
    if (!Object.values(TargetAudience).includes(data.target_audience)) {
      throw new BadRequest('Invalid target audience');
    }

    const alreadyExists = await this.surveyRepository.findByTitle(data.title);

    if (alreadyExists) {
      throw new Error('Survey already exists');
    }
  }
}