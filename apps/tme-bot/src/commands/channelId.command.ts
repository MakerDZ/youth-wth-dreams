import { bot } from '../libs/bot';

export default {
    name: 'channelId',
    async execute(ctx: any) {
        try {
            const message = ctx.message.text;
            const chatId = ctx.chat.id;
            const topic = ctx.message.is_topic_message
                ? ctx.message.message_thread_id
                : undefined;
            if (topic) {
                return bot.telegram.sendMessage(chatId, `${topic}`, {
                    message_thread_id: topic,
                });
            }
            return bot.telegram.sendMessage(chatId, `${chatId}`, {
                message_thread_id: topic,
            });
        } catch (error) {
            throw new Error('Error sending channel id : \n\n' + error);
        }
    },
};
