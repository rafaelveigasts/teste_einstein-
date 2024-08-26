import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class UpdateSurveyDTO {
  @IsString()
  @IsNotEmpty()
  public id: string;


  @IsNumber()
  @IsNotEmpty()
  public star_quantity: number;

  @IsEmail()
  @IsNotEmpty()
  public email: string;
}