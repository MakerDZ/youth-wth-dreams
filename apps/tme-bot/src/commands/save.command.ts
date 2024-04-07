import { bot } from '../libs/bot';
import { isInEnum } from '../utils/inEnum';
import { Topics } from '../enums/topic.enum';

export default {
    name: 'save',
    async execute(ctx: any) {
        const message = ctx.message.text;
        const chatId = ctx.chat.id;
        const topic = ctx.message.is_topic_message
            ? ctx.message.message_thread_id
            : undefined;
        if (isInEnum(topic, Topics)) {
            ctx.react('👌');
        }
    },
};
