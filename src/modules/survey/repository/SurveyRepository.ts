import { Survey } from "@prisma/client";
import { CreateSurveyDTO } from "../controllers/dto/CreateSurveyDTO";

export interface ISurveyRepository {
   create ({ title, star_quantity, target_audience }: CreateSurveyDTO): Promise<Survey>
   findByTitle(title: string): Promise<Survey | null>
}