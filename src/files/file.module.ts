import { Module } from '@nestjs/common';

import { FileService } from './file-service/file.service';
import { FileController } from './file-controller/file.controller';

@Module({
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
