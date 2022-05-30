import { EntityRepository, Repository } from 'typeorm';
import { Classroom } from '../models';

@EntityRepository(Classroom)
export class ClassroomRepository extends Repository<Classroom> {
  async findByName(name: string): Promise<Classroom> {
    return this.findOneOrFail({
      where: {
        name,
      },
    });
  }
}
