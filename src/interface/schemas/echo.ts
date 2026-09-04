import z from 'zod';

export const echoBodySchema = z.object({
  message: z
    .string({ error: 'Поле message обязательно и должно быть строкой' })
    .min(1, 'Сообщение не может быть пустым')
    .max(1000, 'Сообщение слишком длинное'),
});
