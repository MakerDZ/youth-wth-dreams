import { z } from 'zod';

export const NoteSchema = z.object({
    note: z.string().min(1),
});

export type TypeNoteSchema = z.infer<typeof NoteSchema>;
