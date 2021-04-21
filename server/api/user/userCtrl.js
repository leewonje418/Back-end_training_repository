import logger from '../../lib/logger';
import { createToken } from '../../lib/token';
import { User } from '../../models';

exports.signUp = async (req, res) => {
    const { id, password, username, email } = req.body;
    try {
        const exUser = await User.findOne({
            where: {
                id
            }
        })
        if(exUser !== undefined) {
            return res.status(400).json({
                message: '이미 가입된 아이디 입니다.'
            })
        }
        await User.create({
            id, password, username, email
        })
        return res.status(200).json({
            message: '회원가입 성공',
        })
    } catch (error) {
        logger.red(error);
        return res.status(500).json({
            message: '회원가입 오류입니다.',
        })
    }
}
exports.login = async (req, res) => {
    const { id, password } = req.body;
    try {
        const exUser = await User.findOne({
            where: {
                id,
                password
            }
        })
        if(exUser === undefined) {
            return res.status(400).json({
                message: '검증 오류'
            })
        }
        const token = await createToken(email);
        return res.status(200).json({
            message: '로그인 성공',
            data : {
                'x-access-token': token
            }
        })
    } catch (error) {
        logger.red(error);
        return res.status(500).json({
            message: '로그인 오류입니다.',
        })
    }
}
exports.findUser = async (req, res) => {
    const { id } = req.user;
    try {
        const exUser = await User.findOne({
            where: {
                id
            }
        })
        return res.status(200).json({
            message: '유저조회 성공',
            data : {
                exUser
            }
        })
    } catch (error) {
        logger.red(error);
        return res.status(500).json({
            message: '유저조회 오류입니다.',
        })
    }
}
exports.findUsers = async (req, res) => {
    try {
        const exUser = await User.findAll();
        return res.status(200).json({
            message: '유저전채조회 성공',
            data : {
                exUser
            }
        })
    } catch (error) {
        logger.red(error);
        return res.status(500).json({
            message: '유저전채조회 오류입니다.',
        })
    }
}
exports.updateUser = async (req, res) => {
    const { id } = req.user;
    const { password, username, email } = req.body;
    try {
        await User.update({
            password: password,
            username: username,
            email: email
        }, {
            where: { id }
        })
        return res.status(200).json({
            message: '유저수정 성공',
        })
    } catch (error) {
        logger.red(error);
        return res.status(500).json({
            message: '유저수정 오류입니다.',
        })
    }
}
exports.deleteUser = async (req, res) => {
    const { id } = req.user;
    try {
        await User.destroy({
            where: { id }
        })
        return res.status(200).json({
            message: '유저삭제 성공'
        })
    } catch (error) {
        logger.red(error);
        return res.status(500).json({
            message: '유저삭제 오류입니다.'
        })
    }
}