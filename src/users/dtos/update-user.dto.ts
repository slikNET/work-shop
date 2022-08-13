import {IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength, Min, Max} from "class-validator";
import {USER_ROLE} from "../types/user-role.enum";

export class UpdateUserDto {
  @MaxLength(50)
  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  public name: string;

  @Max(200)
  @Min(0)
  @IsNotEmpty()
  @IsNumber()
  public age: number;

  @IsEnum(USER_ROLE)
  @IsNotEmpty()
  public role: USER_ROLE;

  @IsBoolean()
  public active: boolean;
}