import { HttpRequest, HttpResponse } from "@shared/infra/helpers/protocols";
import { CreateSurveyDTO } from "./dto/CreateSurveyDTO";
import { container, inject, injectable } from "tsyringe";
import { ICreateSurveyUseCase } from "../useCases/ICreateSurveyUseCase";
import { CreateSurveyUseCase } from "../useCases/CreateSurveyUseCase";
import { ok } from "@shared/infra/helpers/httpHelper";

@injectable()
export class CreateSurveyController {
  constructor() {}
  
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    console.log('controller')
    const { title, email, star_quantity, target_audience }: CreateSurveyDTO = httpRequest.body;
    const createSurveyUseCase = container.resolve(CreateSurveyUseCase);
    
    
      const survey = await createSurveyUseCase.execute({
        title,
        email,
        star_quantity,
        target_audience
      });


    console.log(survey)

      return ok(survey);
    
  }
}