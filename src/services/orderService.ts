import orderModel from '../models/orderModel';
import { Prod } from '../interfaces';

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

async function create(userId: number | undefined) {
  await orderModel.create(userId); 
}

export default {
  getAll,
  create,
};