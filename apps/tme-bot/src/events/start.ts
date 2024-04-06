import { bot } from '../libs/bot';
import { Markup } from 'telegraf';

export default function event() {
    bot.start((ctx) =>
        ctx.replyWithPhoto(
            {
                url: 'https://us-east-1.tixte.net/uploads/share.tixte.co/YouthWithDream.png',
            },
            {
                caption:
                    'မင်္ဂလာပါ။\n\nယခု bot ​လေးသည် Youth With Dream Community ရဲ့ နည်းပညာကို အ​ခြေခံ​သော Interaction များပြုလုပ်နိုင်ရန်အတွက် ဖန်တီးထား​သော bot ​လေးဖြစ်ပါသည်။',
                reply_markup: Markup.inlineKeyboard([
                    [
                        Markup.button.callback(
                            'About Community',
                            'about-community'
                        ),
                    ],
                ]).reply_markup,
            }
        )
    );
}
