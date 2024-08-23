import { CreateSurveyDTO } from "@modules/survey/controllers/dto/CreateSurveyDTO";
import { ISurveyRepository } from "@modules/survey/repository/SurveyRepository";
import prisma from "../prismaClient";
import { PrismaClient, Survey } from "@prisma/client";

export class PrismaSurveyRepository implements ISurveyRepository {
  private readonly survey: PrismaClient['survey']
  
  constructor() {
    this.survey = prisma.survey
  }
  
  async create({ title, star_quantity, target_audience, email }: CreateSurveyDTO): Promise<Survey> {
    const survey = await this.survey.create({
      data: {
        title,
        star_quantity,
        target_audience,
        email
      }
    })

    return survey
  }

  async findByTitle(title: string): Promise<Survey | null> {
    const survey = await this.survey.findFirstOrThrow({
      where: {
        title
      }
    })

    return survey
  }
}