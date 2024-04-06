import 'dotenv/config';
import { bot } from './libs/bot';
import { loadEvents } from './utils/eventLoader';

loadEvents();
bot.launch();
