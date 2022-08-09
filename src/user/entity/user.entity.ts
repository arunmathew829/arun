import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: any;

  @Column({ length: 50 })
  public email: string;

  @Column({ length: 50 })
  public pass: string;

  @Column({ length: 50 })
  public confirm: string;

  @Column({ length: 50 })
  public referal: number;

  @CreateDateColumn({ nullable: true })
  public createdAt: Date;

  save: any;

  @BeforeInsert()
  async setPassword(pass: string) {
    const salt = await bcrypt.genSalt();
    this.pass = await bcrypt.hash(pass || this.pass, salt);
  }
}
