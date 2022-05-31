import {
  IsEmail,
  IsNumber,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MyCrypto } from '../helpers/crypto';
import { Classroom } from './Classroom';

@Entity('student')
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
    transformer: MyCrypto,
  })
  @MaxLength(50)
  @MinLength(3)
  name: string;

  @Column({ unique: true })
  @IsNumber()
  @Max(9999)
  @Min(1)
  key: number;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => Classroom)
  @JoinTable()
  classrooms: Classroom[];
}
