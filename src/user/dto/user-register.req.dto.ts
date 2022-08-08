import {
  IsOptional,
  IsEmail,
  IsNotEmpty,
  Length,
  Matches,
} from 'class-validator';
import { MESSAGE, REGEX } from 'src/app.utils';

export class UserRegisterRequestDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, { message: MESSAGE.PASSWORD_RULE_MESSAGE })
  pass: string;

  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE)
  confirmPass: string;

  @IsOptional()
  referal: any;
}
// export const UserRegister = {
//   UserRegisterRequestDto,
// };
