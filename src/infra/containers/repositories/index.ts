import { container } from 'tsyringe'

import { PrismaSurveyRepository } from '../../../infra/database/prisma/repositories/prisma-survey-repository'
import { ISurveyRepository } from '../../../application/repository/SurveyRepository'

container.registerSingleton<ISurveyRepository>(
  'ISurveyRepository',
  PrismaSurveyRepository
)
