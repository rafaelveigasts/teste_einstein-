import { IsEmail, IsEnum, IsIn, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { TargetAudience } from "./CreateSurveyDTO";


export class ListSurveyDTO {
  @IsString()
  @IsNotEmpty()
  @IsIn(['asc', 'desc'])
  public direction: string;

  
  @IsNotEmpty()
  @IsEnum(TargetAudience)
  public target_audience: TargetAudience;

}