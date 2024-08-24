import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

enum TargetAudience {
  geeks = 'geeks',
  nerds = 'nerds',
  minimalistas = 'minimalistas',
  atletas = 'atletas',
  esportistas = 'esportistas'
}


export class CreateSurveyDTO {
  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsEnum(TargetAudience)
  @IsNotEmpty()
  public target_audience: TargetAudience;

  @IsNumber()
  @IsNotEmpty()
  public star_quantity: number;

  @IsEmail()
  @IsNotEmpty()
  public email: string;
}