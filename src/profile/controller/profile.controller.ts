import { Controller, Post, Body } from '@nestjs/common';
import { ProfileService } from 'src/profile/services/profile.service';
import { Profile } from '../entity/profile.entity';
import { ProfileDto } from '../dto/profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Post()
  async createProfile(@Body() body, profileDto: ProfileDto) {
    return this.profileService.createProfile(body, profileDto);
  }
}
