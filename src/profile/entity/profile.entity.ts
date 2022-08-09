import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
//import * as bcrypt from 'bcrypt';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: any;

  @Column({ length: 50 })
  Amount: number;

  @Column({ length: 50 })
  First_Name: string;

  @Column({ length: 50 })
  Second_Name: string;

  @Column({ length: 50 })
  Name: string;

  @Column({ length: 50 })
  Gender: string;

  @CreateDateColumn()
  DOB: Date;

  @Column({ length: 50 })
  Country_of_birth: string;

  @Column({ length: 50 })
  Nationality: string;

  @Column({ length: 50 })
  CURP: number;

  @Column({ length: 50 })
  RFC: number;

  @Column({ length: 50 })
  Phone: number;

  @Column({ length: 50 })
  Occupation: string;

  @Column({ length: 50 })
  Street: string;

  @Column({ length: 50 })
  No_Outside: string;

  @Column({ length: 50 })
  No_Inside: string;

  @Column({ length: 50 })
  Postal_Code: number;

  @Column({ length: 50 })
  Colonia: string;

  @Column({ length: 50 })
  Municipality: string;

  @Column({ length: 50 })
  Status: string;

  save: any;
}
