import { Survey } from "@prisma/client";
import { CreateSurveyDTO } from "../controllers/dto/CreateSurveyDTO";

export interface ICreateSurveyUseCase {
  execute({ title, email, star_quantity, target_audience }: CreateSurveyDTO): Promise<Survey>;
}