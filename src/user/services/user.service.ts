import { Injectable } from '@nestjs/common';
import { UserRegisterRequestDto } from 'src/user/dto/user-register.req.dto';
import { v4 as uuid } from 'uuid';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  private readonly;
  async createUser(
    {
      email,
      pass,
      confirmPass,
      referal,
    }: { email: string; pass: string; confirmPass: string; referal: any },
    RegisterDto: UserRegisterRequestDto,
  ) {
    const newUser = ({ email, pass, confirmPass, referal } = RegisterDto);

    const user = new User();
    user.email = email;
    user.pass = pass;
    user.confirmPass = confirmPass;
    user.referal = referal;

    const data = await user.save();
    if (data) {
      return { code: 200, msg: 'success' };
    } else {
      return { msg: 'Cannot be stored' };
    }
  }
}
// if (newUser.pass === newUser.confirm) {

//(insert into user(id,email,pass,created_at)VALUES (newUser.id,newUser.email,newUser.pass,newUser.created_at));
