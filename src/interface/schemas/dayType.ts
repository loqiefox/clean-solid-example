import z from 'zod';

export const dayTypeQuerySchema = z.object({
  date: z
    .iso.date({ error: 'Нужна дата в формате ГГГГ-ММ-ДД' })
    .transform((value: string) => new Date(value)),
});
