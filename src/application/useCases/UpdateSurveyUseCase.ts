import { Survey } from '@prisma/client'
import { ISurveyRepository, UpdateSurveyInput } from '../repository/SurveyRepository'
import { inject, injectable } from 'tsyringe'
import { IUpdateSurveyUseCase } from './interfaces/IUpdateSurveyUseCase'
import { NotFound } from '@/shared/errors/dto/NotFound'

@injectable()
export class UpdateSurveyUseCase implements IUpdateSurveyUseCase {
  constructor(
    @inject('ISurveyRepository')
    private surveyRepository: ISurveyRepository
  ) {}

  async execute({ id, star_quantity, email }: UpdateSurveyInput): Promise<Survey> {
    const surveyExists = await this.surveyRepository.findById(id)

    if (!surveyExists) {
      throw new NotFound('Survey not found')
    }

    const survey = await this.surveyRepository.update({
      id,
      email,
      star_quantity
    })

    return survey
  }
}
