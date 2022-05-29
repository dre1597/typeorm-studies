import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';
import { Content } from '../models';

export const contentRouter = Router();

contentRouter.post('/', async (request: Request, response: Response) => {
  try {
    const contentRepository = getRepository(Content);

    const contentSaved = await contentRepository.save(request.body);

    return response.status(201).json(contentSaved);
  } catch (error: any) {
    console.log(
      'There is an error on create a new content method',
      error.message,
    );
  }
});

contentRouter.get('/', async (_request: Request, response: Response) => {
  try {
    const contentRepository = getRepository(Content);

    const contents = await contentRepository.find();

    return response.json(contents);
  } catch (error: any) {
    console.log('There is an error on list all contents method', error.message);
  }
});
