import { IsEmail, IsEnum, IsNumber, IsString } from "class-validator";

enum TargetAudience {
  geeks = 'geeks',
  nerds = 'nerds',
  minimalistas = 'minimalistas',
  atletas = 'atletas',
  esportistas = 'esportistas'
}


export class CreateSurveyDTO {
  @IsString()
  title: string;

  @IsEnum(TargetAudience)
  target_audience: TargetAudience;

  @IsNumber()
  star_quantity: number;

  @IsEmail()
  email: string;
}