'use server';

import { action } from '../lib/safe-action';
import { EntranceSchema } from '../validations/entrance.validation';
import { z } from 'zod';

export const entranceAction = action(
    EntranceSchema.extend({
        UserId: z.string(),
        ChatId: z.string(),
        QueryId: z.string(),
    }),
    async ({ Dreams, Executions, Motivation, UserId, ChatId, QueryId }) => {
        // create user
        // create entrance
        console.log(Dreams, Executions, Motivation, UserId, ChatId, QueryId);
        const queryParams = new URLSearchParams({
            web_app_query_id: QueryId,
            result: JSON.stringify({
                type: 'article',
                id: 'unique-id',
                title: 'Message from Mini App',
                input_message_content: {
                    message_text: '!filled_entrance',
                },
            }),
        });

        const apiUrl = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/answerWebAppQuery?${queryParams.toString()}`;

        const result = await fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.ok) {
                    return {
                        success: true,
                    };
                } else {
                    // Handle the error case
                    console.error('Failed to send message:', data.description);
                    return {
                        success: false,
                    };
                }
            })
            .catch((error) => {
                console.error('Error sending message:', error);
                return {
                    success: false,
                };
                // Handle any errors that occurred during the request
            });
        return result;
    }
);
