import { Column, Entity } from 'typeorm';
import { Institution } from './Institution';

@Entity('university')
export class University extends Institution {
  @Column()
  graduations: string;

  @Column()
  doctors: string;

  @Column()
  masters: string;
}
