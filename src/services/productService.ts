import productModel from '../models/productModel';

async function getAll() {
  const products = await productModel.getAll();
  return { status: 200, products };
}

export default {
  getAll,
};