import { ChildEntity, Column } from 'typeorm';
import { Institution } from './Institution';

@ChildEntity()
export class University extends Institution {
  @Column()
  graduations: string;

  @Column()
  doctors: string;

  @Column()
  masters: string;
}
