import 'dotenv/config';
import { bot } from './libs/bot';
import { loadEvents } from './utils/eventLoader';
import { dbConnect } from './libs/database';
import { app } from './libs/server';

loadEvents();
dbConnect.then(() => {
    bot.launch();
    app.listen(process.env.PORT || 3080, () => {
        console.log('Express server is running.');
    });
});
