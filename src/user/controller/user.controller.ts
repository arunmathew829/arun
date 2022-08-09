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
  @UsePipes(ValidationPipe)
  async createUser(
    @Body()
    Registerdto: UserRegisterRequestDto,
  ) {
    return this.userService.createUser(Registerdto);
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
