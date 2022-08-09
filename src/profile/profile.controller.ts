import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from './entity/profile.entity';
import { ProfileDto } from './dto/profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}
  @Post()
  @UsePipes(ValidationPipe)
  async createProfile(
    @Body()
    profileDto: ProfileDto,
  ) {
    return this.profileService.createProfile(profileDto);
  }
}
