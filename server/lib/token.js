import * as jwt from 'jsonwebtoken'
const { JWT_SECRET } = process.env

export const createToken = async (id) => {
  const payload = {
    id,
  };

  const options = {
    issuer: 'DGSW',
    expiresIn: '2 days',
  }

  return jwt.sign(payload, JWT_SECRET, options);
}

export const verifyToken = async (token) => await jwt.verify(token, JWT_SECRET);