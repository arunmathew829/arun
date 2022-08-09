import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
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
    TypeOrmModule.forFeature([User, Profile]),
    MulterModule.register({ dest: './uploads' }),
    UserModule,
    ProfileModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
