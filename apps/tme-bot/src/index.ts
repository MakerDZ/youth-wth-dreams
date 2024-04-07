import 'dotenv/config';
import { bot } from './libs/bot';
import { loadEvents } from './utils/eventLoader';
import { dbConnect } from './libs/database';

loadEvents();
dbConnect.then(() => {
    bot.launch();
});
