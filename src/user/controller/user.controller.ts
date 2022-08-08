import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from 'src/user/services/user.service';
//import * as bcrypt from 'bcrypt';
import { UserRegisterRequestDto } from 'src/user/dto/user-register.req.dto';
import { User } from 'src/user/entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body()
    body: { email: string; pass: string; confirmPass: string; referal: any },
    UserRegister: UserRegisterRequestDto,
  ) {
    return this.userService.createUser(body, UserRegister);
  }
}
// : Promise<User>
//   const salt = await bcrypt.genSalt();
//   const pass = await bcrypt.hash(UserRegister.pass, salt);

//   const user = new User();
//   user.id = uuid();
//   user.email = UserRegister.email;
//   user.pass = pass;
//   user.confirm = UserRegister.confirm;
//   user.createdAt = new Date();

// return  user;
// if (user.pass === user.confirm) {
//   console.log(user);
//   return user;
// }
