import { z } from 'zod';

export const projectValidationSchema = z.object({
  email: z.string().trim().email('Please enter a valid email'),
  password: z
    .string()
    .trim()
    .min(6, 'Password needs to be at lest 6 character'),
});
