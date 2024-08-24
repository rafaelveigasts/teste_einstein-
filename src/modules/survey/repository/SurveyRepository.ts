import { Survey } from "@prisma/client";
import { CreateSurveyDTO, TargetAudience } from "../controllers/dto/CreateSurveyDTO";

export type CreateSurveyInput = {
   title: string
   target_audience: TargetAudience
}

export type UpdateSurveyInput = {
   id: string
   email: string
   star_quantity: number
}

export interface ISurveyRepository {
   create ({ title, target_audience }: CreateSurveyInput): Promise<Survey>
   findByTitle(title: string): Promise<Survey | null>
   update({ id, email, star_quantity }: UpdateSurveyInput): Promise<Survey>
}