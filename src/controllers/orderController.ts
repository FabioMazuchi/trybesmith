import { Request, Response } from 'express';
import Jwt from 'jsonwebtoken';
import { MyJwt } from '../interfaces';
import orderService from '../services/orderService';

async function getAll(req: Request, res: Response) {
  const orders = await orderService.getAll();
  res.status(200).json(orders);
}

async function create(req: Request, res: Response) {
  const { productsIds } = req.body;
  const token = req.headers.authorization as string;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  
  const decoded = Jwt.decode(token);
  const result = decoded as MyJwt;
  const { data: { id } } = result;
  const final = { userId: id, productsIds };

  await orderService.create(id, productsIds);
  res.status(201).json(final);
}

export default {
  getAll,
  create,
};