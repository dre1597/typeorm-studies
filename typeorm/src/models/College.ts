import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Identifier } from './Identifier';

@Entity('college')
export class College {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  graduations: string;

  @Column()
  year: number;

  @Column(() => Identifier)
  identification: Identifier;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
