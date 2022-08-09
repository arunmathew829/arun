import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRegisterRequestDto } from 'src/user/dto/user-register.req.dto';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  // constructor(
  //   @InjectRepository(User)
  //   private userRepository: Repository<User>,
  // ) {}
  private readonly;
  async createUser(Registerdto: UserRegisterRequestDto) {
    const { email, pass, confirm, referal } = Registerdto;

    const user = new User();
    user.email = email;
    user.pass = pass;
    user.confirm = confirm;
    user.referal = referal;

    const data = await user.save();
    if (data) {
      return { code: 200, msg: 'success' };
    } else {
      return { msg: 'Data storing failed' };
    }
  }
}
// if (newUser.pass === newUser.confirm) {
