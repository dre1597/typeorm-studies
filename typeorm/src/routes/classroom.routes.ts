import { Request, Response, Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';

import { Classroom } from '../models';
import { ClassroomRepository } from '../repositories';

export const classroomRouter = Router();

classroomRouter.post('/', async (request: Request, response: Response) => {
  try {
    const classroomRepository = getRepository(Classroom);

    const classroomSaved = await classroomRepository.save(request.body);

    return response.status(201).json(classroomSaved);
  } catch (error: any) {
    console.log(
      'There is an error on create a new classroom method',
      error.message,
    );
  }
});

classroomRouter.get('/', async (_request: Request, response: Response) => {
  try {
    const classroomRepository = getRepository(Classroom);

    const classrooms = await classroomRepository.find();

    return response.json(classrooms);
  } catch (error: any) {
    console.log(
      'There is an error on list all classrooms method',
      error.message,
    );
  }
});

classroomRouter.get('/:name', async (request: Request, response: Response) => {
  try {
    const name = request.params.name;

    const classroomRepository = getCustomRepository(ClassroomRepository);

    const classroomFound = await classroomRepository.findByName(name);

    return response.json(classroomFound);
  } catch (error: any) {
    console.log(
      'There is an error on list one classroom by name method',
      error.message,
    );
  }
});
