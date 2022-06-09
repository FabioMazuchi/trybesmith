import { Request, Response } from 'express';
import productService from '../services/productService';

async function getAll(req: Request, res: Response) {
  const { status, products } = await productService.getAll();
  res.status(status).json(products);
}

export default {
  getAll,
};