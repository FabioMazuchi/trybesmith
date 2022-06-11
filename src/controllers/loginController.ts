import { Request, Response } from 'express';
import { UserLogin, UserToken } from '../interfaces';
import loginService from '../services/loginService';
import generateToken from '../utils/generateJWT';

async function getByUsername(req: Request, res: Response) {
  const { username: userName, password } = req.body as UserLogin;
  const user = await loginService.getByUsername(userName);

  const id = user?.id;
  const username = user?.username;

  if (user?.password !== password || username !== userName) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  const userLogin: UserToken = { id, username }; 
  const token = generateToken(userLogin, password);

  res.status(200).json({ token });
}

export default {
  getByUsername,
};