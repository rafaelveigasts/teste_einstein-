import { TargetAudience } from '@/application/controllers/dto/CreateSurveyDTO'
import { CreateSurveyUseCase } from '@/application/useCases/CreateSurveyUseCase'
import { ICreateSurveyUseCase } from '@/application/useCases/interfaces/ICreateSurveyUseCase'
import { IListSurveyUseCase } from '@/application/useCases/interfaces/IListSurveyUseCase'
import { IUpdateSurveyUseCase } from '@/application/useCases/interfaces/IUpdateSurveyUseCase'
import { ListSurveyUseCase } from '@/application/useCases/ListSurveyUseCase'
import { UpdateSurveyUseCase } from '@/application/useCases/UpdateSurveyUseCase'
import { PrismaSurveyRepository } from '@/infra/database/prisma/repositories/prisma-survey-repository'

let createSurveyUseCase: ICreateSurveyUseCase
let updateSurveyUseCase: IUpdateSurveyUseCase
let listSurveyUseCase: IListSurveyUseCase

describe('Survey UseCase Unit Tests', () => {
  test('should be able to create a survey', async () => {
    const repo = new PrismaSurveyRepository()
    createSurveyUseCase = new CreateSurveyUseCase(repo)

    const survey = await createSurveyUseCase.execute({
      title: 'Survey Test',
      target_audience: TargetAudience.atletas
    })

    expect(survey).toHaveProperty('id')
  })

  test('should be able to update a survey', async () => {
    const repo = new PrismaSurveyRepository()
    createSurveyUseCase = new CreateSurveyUseCase(repo)

    const survey = await createSurveyUseCase.execute({
      title: 'Survey Test',
      target_audience: TargetAudience.atletas
    })

    updateSurveyUseCase = new UpdateSurveyUseCase(repo)

    const updated = await updateSurveyUseCase.execute({
      id: survey.id,
      email: 'Survey Test Updated',
      star_quantity: 5
    })

    expect(updated.star_quantity).toBe(5)
    expect(updated.email).toBe('Survey Test Updated')
  })

  test('should be able to list surveys', async () => {
    const repo = new PrismaSurveyRepository()
    createSurveyUseCase = new CreateSurveyUseCase(repo)

    await createSurveyUseCase.execute({
      title: 'Survey Test',
      target_audience: TargetAudience.atletas
    })

    listSurveyUseCase = new ListSurveyUseCase(repo)

    const surveys = await listSurveyUseCase.execute({
      target_audience: TargetAudience.atletas,
      direction: 'asc'
    })

    expect(surveys.length).toBeGreaterThan(0)
  })
})
