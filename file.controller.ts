import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { imageFileFilter } from './file-helper';
import { FileService } from '../file-service/file.service';

@Controller('file')
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  }),
)
export class FileController {
  constructor(private readonly FileService: FileService) {}

  @Post('/idfront')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
      }),
      fileFilter: imageFileFilter,
    }),
  )
  UploadIDfront(@UploadedFile() file) {
    return this.FileService.UploadIDfront(file);
  }

  @Post('/idback')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
      }),
      fileFilter: imageFileFilter,
    }),
  )
  UploadIDback(@UploadedFile() file) {
    return this.FileService.UploadIDback(file);
  }

  @Post('/id')
  addIDnumber(@Body() body) {
    return this.FileService.addIDnumber(body);
  }

  @Post('/address')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
      }),
      fileFilter: imageFileFilter,
    }),
  )
  UploadAddressProof(@UploadedFile() file) {
    return this.FileService.UploadAddressProof(file);
  }
}
