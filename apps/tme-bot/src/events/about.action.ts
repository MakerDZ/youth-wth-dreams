import { bot } from '../libs/bot';
import { Markup } from 'telegraf';

export default function event() {
    //Forward this message from the about topic channel.
    const chatId = '-1002109546771';
    const messageId = 113;

    bot.action('about-community', async (ctx) => {
        try {
            const toUserId = ctx.from.id;
            ctx.telegram
                .forwardMessage(toUserId, chatId, messageId)
                .then(async () => {
                    await ctx.reply(
                        'အကယ်၍ ယခု community လေးက သင့်အတွက်လိုအပ်နေတဲ့အရာလေးတစ်ခုလို့ ထင်မိရင် Join ခဲ့ဖို့အတွက် ဖိတ် ခေါ်ပါတယ်။',
                        {
                            parse_mode: 'HTML',
                            ...Markup.inlineKeyboard([
                                Markup.button.callback(
                                    'Learn More to Join',
                                    'learn-more'
                                ),
                            ]),
                        }
                    );
                    await ctx.answerCbQuery();
                });
        } catch (error) {
            console.log(error);
        }
    });
}
