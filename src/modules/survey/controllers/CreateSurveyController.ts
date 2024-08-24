import { Controller, HttpRequest, HttpResponse } from "@shared/infra/helpers/protocols";
import { CreateSurveyDTO } from "./dto/CreateSurveyDTO";
import { container, inject, injectable } from "tsyringe";
import { ICreateSurveyUseCase } from "../useCases/interfaces/ICreateSurveyUseCase";
import { CreateSurveyUseCase } from "../useCases/CreateSurveyUseCase";
import { ok } from "@shared/infra/helpers/httpHelper";
import { CreateSurveyInput } from "../repository/SurveyRepository";

@injectable()
export class CreateSurveyController implements Controller {
  constructor(
    @inject("ICreateSurveyUseCase")
    private createSurveyUseCase: ICreateSurveyUseCase
  ) {}
  
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    
    const { title,  target_audience }: CreateSurveyInput = httpRequest.body;

      const survey = await this.createSurveyUseCase.execute({
        title,
        target_audience
      });


      return ok(survey);
    
  }
}