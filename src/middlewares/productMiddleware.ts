import { NextFunction, Request, Response } from 'express';
import { Product } from '../interfaces';

function validateName(name: string) {
  if (!name) {
    const message = '"name" is required';
    return ({ status: 400, message });
  }

  if (typeof name !== 'string') {
    const message = '"name" must be a string';
    return ({ status: 422, message });
  }

  if (name.length <= 2) {
    const message = '"name" length must be at least 3 characters long';
    return ({ status: 422, message });
  }

  return null;
}

function validateAmount(amount: string) {
  if (!amount) {
    const message = '"amount" is required';
    return ({ status: 400, message });
  }

  if (typeof amount !== 'string') {
    const message = '"amount" must be a string';
    return ({ status: 422, message });
  }

  if (amount.length <= 2) {
    const message = '"amount" length must be at least 3 characters long';
    return ({ status: 422, message });
  }

  return null;
}

export default function validateBody(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { name, amount } = req.body as Product;

  const errorName = validateName(name);
  const errorAmount = validateAmount(amount);

  if (errorName) return res.status(errorName.status).json({ message: errorName.message });
  if (errorAmount) return res.status(errorAmount.status).json({ message: errorAmount.message });

  next();
}
