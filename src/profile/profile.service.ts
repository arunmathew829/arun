import { Injectable } from '@nestjs/common';
import { Profile } from './entity/profile.entity';
import { ProfileDto } from './dto/profile.dto';
@Injectable()
export class ProfileService {
  private readonly;
  async createProfile(profileDto: ProfileDto) {
    const {
      Amount,
      First_Name,
      Second_Name,
      Name,
      Gender,
      DOB,
      Country_of_birth,
      Nationality,
      CURP,
      RFC,
      Phone,
      Occupation,
      Street,
      No_Outside,
      No_Inside,
      PostalCode,
      Colonia,
      Municipality,
      Status,
    } = profileDto;

    const profile = new Profile();
    profile.Amount = Amount;
    profile.First_Name = First_Name;
    profile.Second_Name = Second_Name;
    profile.Name = Name;
    profile.Gender = Gender;
    profile.DOB = DOB;
    profile.Country_of_birth = Country_of_birth;
    profile.Nationality = Nationality;
    profile.CURP = CURP;
    profile.RFC = RFC;
    profile.Phone = Phone;
    profile.Occupation = Occupation;
    profile.Street = Street;
    profile.No_Inside = No_Inside;
    profile.No_Outside = No_Outside;
    profile.Postal_Code = PostalCode;
    profile.Colonia = Colonia;
    profile.Municipality = Municipality;
    profile.Status = Status;

    const data = await profile.save();
    if (data) {
      return { code: 200, msg: 'success' };
    } else {
      return { msg: 'failed,data not stored' };
    }
  }
}
