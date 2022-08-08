import { Module } from '@nestjs/common';
import { ProfileController } from '../profile/controller/profile.controller';
import { ProfileService } from '../profile/services/profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entity/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
