import { inject, injectable } from 'tsyringe'
import { IListSurveyUseCase } from '../useCases/interfaces/IListSurveyUseCase'
import { ListSurveyInput } from '../repository/SurveyRepository'
import * as fs from 'fs'
import * as csv from 'fast-csv'
import { Controller, HttpRequest, HttpResponse } from '../protocols'
import { createdOk } from '../helpers'

@injectable()
export class ExportSurveyController implements Controller {
  constructor(
    @inject('IListSurveyUseCase')
    private listSurveyUseCase: IListSurveyUseCase
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { target_audience, direction }: ListSurveyInput = httpRequest.body

    const survey = await this.listSurveyUseCase.execute({
      target_audience,
      direction
    })

    const ws = fs.createWriteStream('./assets/survey.csv')
    csv.write(survey, { headers: true }).pipe(ws)

    return createdOk(ws)
  }
}
