import { z } from 'zod';

export const EntranceSchema = z.object({
    Dreams: z.string().min(1),
    Executions: z.string().min(1),
    Motivation: z.string().min(1),
});

export type TypeEntranceSchema = z.infer<typeof EntranceSchema>;
