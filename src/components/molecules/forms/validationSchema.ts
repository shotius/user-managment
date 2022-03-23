import * as yup from 'yup';
import { IFormUser } from 'src/types';

type Shape<T> = Record<keyof T, yup.AnySchema>;

export const editUserSchema = yup
  .object<Shape<IFormUser>>({
    user: yup.string().required().max(20),
    email: yup.string().email().required().max(50),
    role: yup.string().required(),
  })
  .required();
