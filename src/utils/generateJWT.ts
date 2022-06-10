// import jwt from 'jsonwebtoken';
import Jwt from 'jsonwebtoken';

import { UserNotPassword } from '../interfaces';

const jwtConfig: Jwt.SignOptions = {
  expiresIn: '50m',
  algorithm: 'HS256',
};

function generateJWT(payload: UserNotPassword, jwtSecret: string) {
  const token = Jwt.sign({ data: payload }, jwtSecret, jwtConfig);

  return token;
}

export default generateJWT;
