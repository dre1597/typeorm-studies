import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';

import Class from '../models/Class';

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
    const classRepository = getRepository(Class);

    const name = request.params.name;

    const classFound = await classRepository.findOne({
      where: {
        name,
      },
    });

    return response.json(classFound);
  } catch (error: any) {
    console.log(
      'There is an error on list one class by name method',
      error.message,
    );
  }
});
