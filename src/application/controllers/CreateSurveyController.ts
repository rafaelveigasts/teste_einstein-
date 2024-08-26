import { inject, injectable } from 'tsyringe'
import { ICreateSurveyUseCase } from '../useCases/interfaces/ICreateSurveyUseCase'
import { CreateSurveyInput } from '../repository/SurveyRepository'
import { ok } from '../helpers'
import { Controller, HttpRequest, HttpResponse } from '../protocols'

@injectable()
export class CreateSurveyController implements Controller {
  constructor(
    @inject('ICreateSurveyUseCase')
    private createSurveyUseCase: ICreateSurveyUseCase
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { title, target_audience }: CreateSurveyInput = httpRequest.body

    const survey = await this.createSurveyUseCase.execute({
      title,
      target_audience
    })

    return ok(survey)
  }
}
