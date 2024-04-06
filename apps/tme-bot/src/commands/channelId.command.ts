import { bot } from '../libs/bot';

export default {
    name: 'channelId',
    async execute(ctx: any) {
        const message = ctx.message.text;
        const chatId = ctx.chat.id;
        const topic = ctx.message.is_topic_message
            ? ctx.message.message_thread_id
            : undefined;
        bot.telegram.sendMessage(chatId, `${topic}`, {
            message_thread_id: topic,
        });
    },
};
