import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export enum TargetAudience {
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
  @IsOptional()
  public star_quantity: number;

  @IsEmail()
  @IsOptional()
  public email: string;
}

