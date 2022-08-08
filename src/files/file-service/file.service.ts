import { Injectable } from '@nestjs/common';

@Injectable()
export class FileService {
  UploadIDfront(file: Express.Multer.File) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    console.log('file', file);
    return response;
  }

  UploadIDback(file: Express.Multer.File) {
    const response = {
      originalname: file.originalname,
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const filename = `{file.originalname}-{uniqueSuffix}{ext}`;
        callback(null, filename);
      },
    };
    console.log('file', file);
    return response;
  }

  addIDnumber({ IdNumber }: { IdNumber: number }) {
    const newIdNumber = { IdNumber };
    return newIdNumber;
  }

  UploadAddressProof(file: Express.Multer.File) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    console.log('file', file);
    return response;
  }
}
function extname(originalname: any) {
  throw new Error('Function not implemented.');
}
