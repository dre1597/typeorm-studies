import { Column } from 'typeorm';

export class Identifier {
  @Column()
  name: string;

  @Column({ unique: true })
  cnpj: string;
}
