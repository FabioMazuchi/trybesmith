import orderModel from '../models/orderModel';
import productModel from '../models/productModel';
import { Prod, Product } from '../interfaces';

async function getAll() {
  const orders = await orderModel.getOrders();
  const products = await orderModel.getProducts();

  const result = orders.map((ord) => {
    const obj: Prod = { id: 0, userId: 0, productsIds: [] };
    
    obj.id = ord.id;
    obj.userId = ord.userId;
    const res = products.filter((prod) => {
      if (prod.orderId === ord.id) {
        return prod.id;
      }
      return null;
    });
    const p = res.map((r) => r.id);
    
    obj.productsIds = p;
    return obj;
  });

  return result;
}

async function create(userId: number | undefined, productsIds: number[]) {
  const obj = await orderModel.create(userId); 
  const { id: orderId } = obj;

  const array = productsIds.map(productModel.getById);
  
  const result = await Promise.all(array);
  const result2 = result as Product[];
  
  const final = result2.map((res) => {
    res.orderId = orderId;
    return res;
  });
  console.log(final);
  
  final.forEach(productModel.createProduct);
}

export default {
  getAll,
  create,
};