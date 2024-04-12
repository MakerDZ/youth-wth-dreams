'use server';

import { z } from 'zod';
import { action } from '../lib/safe-action';
import { entrance } from '../services/entrance.service';
import { identity } from '../services/identity.service';

const botEndpoint = process.env.BOT_API_URL;
const approvalSchema = z.object({
    chatId: z.string(),
    accountId: z.string(),
});

export const approvedAction = action(
    approvalSchema,
    async ({ chatId, accountId }) => {
        await entrance.makeApprove(accountId);
        try {
            fetch(`${botEndpoint}/approved/${chatId}`)
                .then((response) => {
                    if (response.ok) {
                        console.log('Request sent successfully');
                    } else {
                        console.log('Error sending request:', response.status);
                    }
                })
                .catch((error) => {
                    console.log('Error sending request:', error);
                });
            return true;
        } catch (error) {
            throw new Error(
                'Error while approving the entrance form : \n' + error
            );
        }
    }
);

export const rejectedAction = action(
    approvalSchema,
    async ({ chatId, accountId }) => {
        try {
            await entrance.remove(accountId);
            await identity.remove(accountId);
            fetch(`${botEndpoint}/rejected/${chatId}`)
                .then((response) => {
                    if (response.ok) {
                        console.log('Request sent successfully');
                    } else {
                        console.log('Error sending request:', response.status);
                    }
                })
                .catch((error) => {
                    console.log('Error sending request:', error);
                });
            return true;
        } catch (error) {
            throw new Error(
                'Error while approving the entrance form : \n' + error
            );
        }
    }
);
