import express from 'express';
import approvedFormRouter from './approved-form.route';
import rejectedFormRouter from './rejected-form.route';

const router = express.Router();

// Define routes.
router.get('/', (req, res) => {
    res.send('api is running...');
});

router.use('/approved', approvedFormRouter);
router.use('/rejected', rejectedFormRouter);

export { router };
