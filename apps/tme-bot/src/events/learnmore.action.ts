import { bot } from '../libs/bot';
import { Markup } from 'telegraf';

export default function event() {
    bot.action('learn-more', async (ctx) => {
        // check if the user already joined or submitted entrance.

        await ctx.reply(
            'Youth With Dream Community  လေးကို စိတ်ဝင်စားလို့ Join ချင်တယ်ဆိုရင်တော့ "Interested in Joining" ခလုပ် လေးကို နှိပ်ပြီး form  လေးဖြည့်ကာ join နိုင်ပါတယ်။ Qualify ဖြစ်တဲ့ သူတွေကို တော့ invite link  လေး ပြန်ပို ပေးမှာဖြစ်ပါတယ်။ Invite Only Community  လေးလုပ်ထားရတာကလည်း ယခု community  လေးကို တကယ်တန်ဖိုးထားတဲ့သူ တွေကိုပဲ interact လုပ်ခွင့် ပေးချင်လို့ပါ။ နားလည်ပေးနိုင်မယ်လို့လဲ မျှော်လင့်ပါတယ်။',
            {
                parse_mode: 'HTML',
                ...Markup.inlineKeyboard([
                    Markup.button.webApp(
                        'Interested in Joining',
                        `${process.env.TME_APP_BASEURL}/entrance?chatId=${ctx.chat?.id}&userId=${ctx.from.id}`
                    ),
                ]),
            }
        );
        await ctx.answerCbQuery();
    });
}
