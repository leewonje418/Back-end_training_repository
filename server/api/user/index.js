import { Router } from 'express';
import { auth } from '../../middleware/auth.middleware';
import userCtrl from './userCtrl';

const router = Router(); 

// 회원가입
router.post('/signup', userCtrl.signUp);

// 로그인
router.post('/login', userCtrl.login);

// 내정보 보기
router.get('/view/me', auth, userCtrl.findUser);

// 유저 전채 조회
router.get('/view/all', userCtrl.findUsers);

// 유저 정보 수정
router.put('/update', auth, userCtrl.updateUser);

// 유저 삭제
router.delete('/delete', auth, userCtrl.deleteUser);

export default router;