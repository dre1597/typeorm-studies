import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Identifier } from './Identifier';

@Entity('university')
export class University {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  graduations: string;

  @Column()
  doctors: string;

  @Column()
  masters: string;

  @Column(() => Identifier)
  identification: Identifier;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
