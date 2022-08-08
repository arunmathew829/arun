// import {
//   Entity,
//   Column,
//   PrimaryGeneratedColumn,
//   CreateDateColumn,
//   BeforeInsert,
// } from 'typeorm';
// import * as bcrypt from 'bcrypt';

// @Entity()
// export class User {
//   @PrimaryGeneratedColumn()
//   id: any;

//   @Column({ length: 50 })
//   email: string;

//   @Column({ length: 50 })
//   pass: string;

//   @Column({ length: 50 })
//   IdNumber: number;

//   @CreateDateColumn({ nullable: true })
//   createdAt: Date;

//   save: any;

//   // @BeforeInsert()
//   // async setPassword(pass: string) {
//   //   const salt = await bcrypt.genSalt();
//   //   this.pass = await bcrypt.hash(pass || this.pass, salt);
//   // }
// }
