import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { ProfileController } from './profile/controller/profile.controller';
import { UserController } from './user/controller/user.controller';
import { UserService } from './user/services/user.service';
import { ProfileService } from './profile/services/profile.service';
import { FileModule } from './files/file.module';
import { MulterModule } from '@nestjs/platform-express';
import { User } from './user/entity/user.entity';
import { Profile } from './profile/entity/profile.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      entities: [User, Profile],
      synchronize: true,
    }),
    MulterModule.register({ dest: './files' }),
    UserModule,
    ProfileModule,
    FileModule,
    TypeOrmModule.forFeature([User, Profile]),
  ],
  controllers: [AppController, UserController, ProfileController],
  providers: [AppService, UserService, ProfileService],
})
export class AppModule {}
