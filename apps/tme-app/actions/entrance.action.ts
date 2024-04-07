'use server';

import { action } from '../lib/safe-action';
import { EntranceSchema } from '../validations/entrance.validation';
import { z } from 'zod';

export const entranceAction = action(
    EntranceSchema.extend({
        UserId: z.string(),
        ChatId: z.string(),
    }),
    async ({ Dreams, Executions, Motivation, UserId, ChatId }) => {
        // create user
        // create entrance
        console.log(Dreams, Executions, Motivation, UserId, ChatId);
        return {
            success: false,
        };
    }
);
