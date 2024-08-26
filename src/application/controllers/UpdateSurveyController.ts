import { Controller, HttpRequest, HttpResponse } from '../protocols'
import { inject, injectable } from 'tsyringe'
import { ok } from '../helpers'
import { UpdateSurveyInput } from '../repository/SurveyRepository'
import { IUpdateSurveyUseCase } from '../useCases/interfaces/IUpdateSurveyUseCase'

@injectable()
export class UpdateSurveyController implements Controller {
  constructor(
    @inject('IUpdateSurveyUseCase')
    private updateSurveyUseCase: IUpdateSurveyUseCase
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id, star_quantity, email }: UpdateSurveyInput = httpRequest.body

    const surveys = await this.updateSurveyUseCase.execute({
      id,
      email,
      star_quantity
    })

    return ok(surveys)
  }
}
