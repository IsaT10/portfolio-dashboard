import { z } from 'zod';

export const projectValidationSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  liveLink: z.string().min(1, { message: 'Live link is required' }),
  githubClient: z
    .string()
    .min(1, { message: 'Github cliient link is required' }),
  githubServer: z
    .string()
    .min(1, { message: 'Github server link is required' }),
  technology: z
    .array(z.string().min(1, { message: 'Technology is required' }))
    .nonempty({ message: 'At least one technology is required' }),
  features: z
    .array(z.string().min(1, { message: 'Feature is required' }))
    .nonempty({ message: 'At least one feature is required' }),
});
