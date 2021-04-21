import tokenLib from '../lib/token';
import models from '../models'

export const auth = async (req, res, next) => {
    const token = req.headers['x-access-token'];
    try {
        if (token === undefined) {
            return res.status(400).json({
                status: 400,
                message: '토큰이 전송되지 않았습니다.',
            });
        }
        const decoded = await tokenLib.verifyToken(token);
        if (decoded.sub !== 'token') {
            return res.status(403).json({
              status: 403,
              message: '잘못된 토큰입니다.',
            });
        }
        req.user = await models.User.findOne({ where: { id: decoded.id } });
        return next();
    } catch (err) {
        switch (err.message) {
          case 'jwt must be provided':
          case 'token is array':
          case 'jwt malformed':
          case 'invalid token':
          case 'invalid signature':
          case 'invalid signature':
            return res.status(401).json({
                status: 401,
                message: '위조된 토큰',
            });
          case 'jwt expired':
            return res.status(410).json({
                status: 410,
                message: '만료된 토큰',
            });
          case 'no user':
            return res.status(404).json({
                status: 404,
                message: '회원 없음',
            });
          default:
            return res.status(500).json({
                status: 500,
                message: '다시 시도해 주세요',
            });
        }
    }
}