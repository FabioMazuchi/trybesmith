import { NextFunction, Request, Response } from 'express';
import { User } from '../interfaces';
import userBody from '../utils/userBody';

export default function validateBody(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { username, classe, level, password } = req.body as User;
  const errUsername = userBody.validUsername(username);
  const errClasse = userBody.validClasse(classe);
  const errLevel = userBody.validLevel(level);
  const errPass = userBody.validPass(password);
  
  if (errUsername) return res.status(errUsername.status).json({ message: errUsername.message });
  if (errClasse) return res.status(errClasse.status).json({ message: errClasse.message });
  if (errLevel) return res.status(errLevel.status).json({ message: errLevel.message });
  if (errPass) return res.status(errPass.status).json({ message: errPass.message });
  
  next();
}
