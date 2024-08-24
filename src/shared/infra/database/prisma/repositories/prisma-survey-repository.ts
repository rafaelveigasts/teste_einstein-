import { CreateSurveyDTO } from "@modules/survey/controllers/dto/CreateSurveyDTO";
import { ISurveyRepository, UpdateSurveyInput } from "@modules/survey/repository/SurveyRepository";
import prisma from "../prismaClient";
import { PrismaClient, Survey } from "@prisma/client";

export class PrismaSurveyRepository implements ISurveyRepository {
  private readonly survey: PrismaClient['survey']
  
  constructor() {
    this.survey = prisma.survey
  }
  
  async create({ title, star_quantity, target_audience, email }: CreateSurveyDTO): Promise<Survey> {
    console.log('prisma repository')
    const survey = await this.survey.create({
      data: {
        title,
        target_audience,
        star_quantity,
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

  async update({ id, email, star_quantity }: UpdateSurveyInput): Promise<Survey> {
    const updated = await this.survey.update({
      where: { id },
      data: {
        email,
        star_quantity
      }
    })

    return updated
  }
}