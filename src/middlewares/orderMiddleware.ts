import { NextFunction, Request, Response } from 'express';
import { Order } from '../interfaces';

function validateProductsIds(productsIds: number[]) {
  if (!productsIds) {
    const message = '"productsIds" is required';
    return ({ status: 400, message });
  }

  if (typeof productsIds !== 'object') {
    const message = '"productsIds" must be an array';
    return ({ status: 422, message });
  }

  if (productsIds.length === 0) {
    const message = '"productsIds" must include only numbers';
    return ({ status: 422, message });
  }

  return null;
}

export default function validateBody(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { productsIds } = req.body as Order;

  const errProddIds = validateProductsIds(productsIds);

  if (errProddIds) return res.status(errProddIds.status).json({ message: errProddIds.message });
  
  next();
}
