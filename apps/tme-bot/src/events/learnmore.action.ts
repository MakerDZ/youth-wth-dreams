import { bot } from '../libs/bot';
import { Markup } from 'telegraf';
import { identity } from '../services/identity.service';

export default function event() {
    bot.action('learn-more', async (ctx) => {
        try {
            const chatId = ctx.chat?.id;
            const userId = ctx.from.id;
            const isExist = await identity.exist(`${chatId}`, `${userId}`);
            await ctx.answerCbQuery();
            if (!isExist) {
                return await ctx.reply(
                    'Youth With Dream Community  လေးကို စိတ်ဝင်စားလို့ Join ချင်တယ်ဆိုရင်တော့ "Interested in Joining" ခလုပ် လေးကို နှိပ်ပြီး form  လေးဖြည့်ကာ join နိုင်ပါတယ်။ Qualify ဖြစ်တဲ့ သူတွေကို တော့ invite link  လေး ပြန်ပို ပေးမှာဖြစ်ပါတယ်။ Invite Only Community  လေးလုပ်ထားရတာကလည်း ယခု community  လေးကို တကယ်တန်ဖိုးထားတဲ့သူ တွေကိုပဲ interact လုပ်ခွင့် ပေးချင်လို့ပါ။ နားလည်ပေးနိုင်မယ်လို့လဲ မျှော်လင့်ပါတယ်။',
                    {
                        parse_mode: 'HTML',
                        ...Markup.inlineKeyboard([
                            Markup.button.webApp(
                                'Interested in Joining',
                                `${process.env.TME_APP_BASEURL}/entrance?chatId=${chatId}&userId=${userId}`
                            ),
                        ]),
                    }
                );
            }
            return await ctx.reply(
                'သင့်ရဲ့ယခု telegram account သည် community ထဲသို ရောက်ရှိ နေပြီးသား (သိုမဟုတ်) qualify pending ဖြစ် နေပြီးသား ဖြစ်တဲ့အတွက် ထက်မံ Join ရန်မလိုအပ် တော့ပါ။'
            );
        } catch (error) {
            console.log(error);
        }
    });
}
