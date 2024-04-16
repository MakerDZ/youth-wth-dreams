import { Markup } from 'telegraf';
import { isApprovedUser } from '../helpers/validator/isApprovedUser';
import { bot } from '../libs/bot';

export default function event() {
    bot.command('my_journey', async (ctx) => {
        try {
            const chatType = ctx.chat.type;
            const chatId = ctx.chat?.id;
            const userId = ctx.from.id;
            if (chatType !== 'private') {
                return false;
            }
            const approved = await isApprovedUser(userId.toString());
            if (!approved) {
                return ctx.reply(
                    'သင့် account သည် entrance form qualify မဖြစ် သေး သော account ဖြစ်၍ မှတ်တမ်းများ save ၍မရနိုင်ပါ။'
                );
            }
            ctx.reply(
                'သင့်ရဲ့ မှတ်တမ်းများကို ကြည့်ရှုရန် my profile ဆိုတဲ့ ခလုပ် လေးကို နှိပ် ပေးပါ။',
                {
                    parse_mode: 'HTML',
                    ...Markup.inlineKeyboard([
                        Markup.button.webApp(
                            'My Profile',
                            `${process.env.TME_APP_BASEURL}/myprofile?chatId=${chatId}`
                        ),
                    ]),
                }
            );
        } catch (error) {
            console.log(error);
        }
    });
}
