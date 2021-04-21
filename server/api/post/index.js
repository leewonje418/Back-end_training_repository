import { Router } from 'express';
import { auth } from '../../middleware/auth.middleware';
import postCtrl from './postCtrl';

const router = Router();

// 글 재작
router.post('/create', auth, postCtrl.createPost);

// 글 전채보기(최신순)
router.get('/readposts/order', postCtrl.readPostsByOrder);

// 글 전채보기(조회수순)
router.get('/readposts/popular', postCtrl.readPostsByPopular);

// 글 보기
router.get('/readpost', postCtrl.readPost);

// 글 수정
router.put('/update', auth, postCtrl.updatePost);

// 글 삭제
router.delete('/delete', auth, postCtrl.deletePost);

export default router;