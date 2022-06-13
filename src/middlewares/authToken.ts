import { NextFunction, Response, Request } from 'express';
import Jwt from 'jsonwebtoken';
import userService from '../services/userService';
import { MyJwt, User } from '../interfaces';

const authToken = async (req: Request, res:Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization as string;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    
    const decoded = Jwt.decode(token);
    const result = decoded as MyJwt;
    const data = await userService.getById(result.data.id);
    const user = data as User;
  
    Jwt.verify(token, user.password);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default authToken;