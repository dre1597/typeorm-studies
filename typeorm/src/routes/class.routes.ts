import { Request, Response, Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';

import { Class } from '../models';
import { ClassRepository } from '../repositories';

export const classRouter = Router();

classRouter.post('/', async (request: Request, response: Response) => {
  try {
    const classRepository = getRepository(Class);

    const classSaved = await classRepository.save(request.body);

    return response.status(201).json(classSaved);
  } catch (error: any) {
    console.log(
      'There is an error on create a new class method',
      error.message,
    );
  }
});

classRouter.get('/', async (_request: Request, response: Response) => {
  try {
    const classRepository = getRepository(Class);

    const classes = await classRepository.find();

    return response.json(classes);
  } catch (error: any) {
    console.log('There is an error on list all classes method', error.message);
  }
});

classRouter.get('/:name', async (request: Request, response: Response) => {
  try {
    const name = request.params.name;

    const classRepository = getCustomRepository(ClassRepository);

    const classFound = await classRepository.findByName(name);

    return response.json(classFound);
  } catch (error: any) {
    console.log(
      'There is an error on list one class by name method',
      error.message,
    );
  }
});
