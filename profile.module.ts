import { Module } from '@nestjs/common';
import { ProfileController } from '../profile/controller/profile.controller';
import { ProfileService } from '../profile/services/profile.service';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
