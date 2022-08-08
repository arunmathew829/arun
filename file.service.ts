import { Injectable } from '@nestjs/common';

@Injectable()
export class FileService {
  UploadIDfront(file: any) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    console.log(file);
    return response;
  }

  UploadIDback(file: any) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    console.log(file);
    return response;
  }

  addIDnumber({ IdNumber }: { IdNumber: number }) {
    const newIdNumber = { IdNumber };
    return newIdNumber;
  }

  UploadAddressProof(file: any) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    console.log(file);
    return response;
  }
}
