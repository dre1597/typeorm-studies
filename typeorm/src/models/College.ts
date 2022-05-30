import { ChildEntity, Column, Entity } from 'typeorm';
import { Institution } from './Institution';

@ChildEntity()
export class College extends Institution {
  @Column()
  graduations: string;

  @Column()
  year: number;
}
