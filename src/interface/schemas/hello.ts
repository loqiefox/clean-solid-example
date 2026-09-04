import z from 'zod';

export const helloQuerySchema = z.object({
  name: z.string().max(100).optional(),
});
