import { bot } from '../libs/bot';
import { identity } from '../services/identity.service';

export default {
    name: 'dm',
    async execute(ctx: any) {
        try {
            const userId = ctx.from.id;
            const Identity = await identity.getByUserId(userId);
            await ctx.react('👌');
            if (!Identity) {
                ctx.reply(
                    'သင့်ရဲ့ account သည် Entrance Form မဖြည့်ပဲ telegram group ထဲ join ထား သော account ဖြစ်သဖြင့် DM ၍မရနိုင်ပါ။',
                    {
                        reply_to_message_id: ctx.message.message_id,
                    }
                );
            }
            const chatId = Identity?.platform.filter(
                (platform) => platform.name == 'telegram'
            )[0].chatId;
            if (chatId) {
                bot.telegram.sendMessage(chatId, '👋 Helloo');
            }
        } catch (error) {
            throw new Error('Error sending DM : \n\n' + error);
        }
    },
};
