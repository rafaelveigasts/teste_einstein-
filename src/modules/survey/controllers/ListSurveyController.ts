import { Controller, HttpRequest, HttpResponse } from "@shared/infra/helpers/protocols";
import { inject, injectable } from "tsyringe";
import { ok } from "@shared/infra/helpers/httpHelper";
import { IListSurveyUseCase } from "../useCases/interfaces/IListSurveyUseCase";
import { ListSurveyInput } from "../repository/SurveyRepository";

@injectable()
export class ListSurveyController implements Controller {
  constructor(
    @inject("IListSurveyUseCase")
    private listSurveyUseCase: IListSurveyUseCase
    
  ) {}
  
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    
    const { target_audience, direction }: ListSurveyInput = httpRequest.body;

      const survey = await this.listSurveyUseCase.execute({
        target_audience,
        direction
      });


      return ok(survey);
    
  }
}