import express from 'express';
import { controller } from '../controllers/form.controller';
const router = express.Router();

router.get('/:chatId', controller.rejected);

export default router;
