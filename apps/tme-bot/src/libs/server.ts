import express from 'express';
import cors from 'cors';
import { router } from '../routers';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

export { app };
