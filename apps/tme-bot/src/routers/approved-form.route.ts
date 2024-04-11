import express from 'express';
import { controller } from '../controllers/form.controller';
const router = express.Router();

router.get('/:chatId', controller.approved);

export default router;
