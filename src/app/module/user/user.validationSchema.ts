import z from 'zod';

export const zodCreateUserValidationSchema = z.object({
    email: z.string(),
    name: z.string(),
    photoUrl: z.string().optional(),
})

