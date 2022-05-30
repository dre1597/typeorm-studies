import { validate } from 'class-validator';
import { Request, Response, Router } from 'express';
import { getRepository } from 'typeorm';
import { Student } from '../models';

export const studentRouter = Router();

studentRouter.post('/', async (request: Request, response: Response) => {
  try {
    const studentRepository = getRepository(Student);
    const { key, name, email } = request.body;

    const student = studentRepository.create({
      key,
      name,
      email,
    });

    const errors = await validate(student);

    if (errors.length === 0) {
      const studentSaved = await studentRepository.save(student);
      return response.status(201).json(studentSaved);
    }

    return response.status(403).json(errors.map(error => error.constraints));
  } catch (error: any) {
    console.log(
      'There is an error on create a new student method',
      error.message,
    );
  }
});

studentRouter.get('/', async (_request: Request, response: Response) => {
  try {
    const studentRepository = getRepository(Student);

    const students = await studentRepository.find();

    return response.json(students);
  } catch (error: any) {
    console.log('There is an error on list all students method', error.message);
  }
});
