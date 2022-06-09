import { Request, Response } from 'express';
import { Product } from '../interfaces';
import productService from '../services/productService';

async function getAll(req: Request, res: Response) {
  const { status, products } = await productService.getAll();
  res.status(status).json(products);
}

async function create(req: Request, res: Response) {
  const product = req.body as Product;
  const { status, data } = await productService.create(product);
  res.status(status).json(data);
}

export default {
  getAll,
  create,
};