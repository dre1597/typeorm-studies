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
    console.log('error message', error.message);
  }
});

classRouter.get('/', async (_request: Request, response: Response) => {
  const classRepository = getRepository(Class);

  const classes = await classRepository.find();

  return response.json(classes);
});
