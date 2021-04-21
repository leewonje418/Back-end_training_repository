import { Router } from 'express';
import user from './user';
import post from './post';

const router = Router();

router.use('/post', post);
router.use('/user', user);

export default router;