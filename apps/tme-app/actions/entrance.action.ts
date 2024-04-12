'use server';

import { action } from '../lib/safe-action';
import { entrance } from '../services/entrance.service';
import { identity } from '../services/identity.service';
import { generateToken } from '../utils/generateToken';
import { EntranceSchema } from '../schema/entrance.schema';
import { z } from 'zod';
import { encrypt } from '../utils/encrypt-decrypt';
import { entranceAlert } from '../utils/entranceAlert';

export const EntranceActionCreate = action(
    EntranceSchema.extend({
        UserId: z.string(),
        ChatId: z.string(),
        QueryId: z.string(),
    }),
    async ({ Dreams, Executions, Motivation, UserId, ChatId, QueryId }) => {
        const queryParams = new URLSearchParams({
            web_app_query_id: QueryId,
            result: JSON.stringify({
                type: 'article',
                id: generateToken(),
                title: 'Successfully Submitted.',
                input_message_content: {
                    message_text: '!filled_entrance',
                },
            }),
        });
        const apiUrl = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/answerWebAppQuery?${queryParams.toString()}`;

        try {
            const newIdentity = await identity.create(ChatId, UserId);
            if (!newIdentity._id) {
                throw new Error('Failed to create new identity');
            }

            await entrance.create({
                accountId: newIdentity._id,
                previousDreams: Dreams,
                previousExecutions: Executions,
                motivationToJoin: Motivation,
            });

            const encryptedId = encrypt(newIdentity._id);
            entranceAlert(encryptedId);

            const result = await fetch(apiUrl)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `HTTP error! status: ${response.status}`
                        );
                    }
                    return response.json();
                })
                .then((data) => {
                    if (!data.ok) {
                        throw new Error(
                            `Failed to send message: ${data.description}`
                        );
                    }
                    return { success: true, message: 'success!' };
                });

            return result;
        } catch (error: any) {
            console.error('Error in EntranceActionCreate:', error);
            return {
                success: false,
                message: error.message,
            };
        }
    }
);

export const EntranceActionValidate = async (
    chatId: string,
    userId: string
) => {
    return await identity.exist(chatId, userId);
};
