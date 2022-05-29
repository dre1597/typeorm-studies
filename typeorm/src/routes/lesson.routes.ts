import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';
import { Lesson } from '../models';

export const lessonRouter = Router();

lessonRouter.post('/', async (request: Request, response: Response) => {
  try {
    const lessonRepository = getRepository(Lesson);

    const lessonSaved = await lessonRepository.save(request.body);

    return response.status(201).json(lessonSaved);
  } catch (error: any) {
    console.log(
      'There is an error on create a new lesson method',
      error.message,
    );
  }
});

lessonRouter.get('/', async (_request: Request, response: Response) => {
  try {
    const lessonRepository = getRepository(Lesson);

    const lessons = await lessonRepository.find();

    return response.json(lessons);
  } catch (error: any) {
    console.log('There is an error on list all lessons method', error.message);
  }
});
