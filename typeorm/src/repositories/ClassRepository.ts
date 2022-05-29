import { EntityRepository, Repository } from 'typeorm';
import { Class } from '../models';

@EntityRepository(Class)
export class ClassRepository extends Repository<Class> {
  async findByName(name: string): Promise<Class> {
    return this.findOneOrFail({
      where: {
        name,
      },
    });
  }
}
