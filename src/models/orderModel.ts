import { RowDataPacket } from 'mysql2';
import connection from './connection';

async function getProducts() {
  const queryProduct = 'SELECT * FROM Trybesmith.Products';
  const [products] = await connection.execute<RowDataPacket[]>(queryProduct);

  return products;
}

async function getOrders() {
  const queryOrder = 'SELECT * FROM Trybesmith.Orders';
  const [orders] = await connection.execute<RowDataPacket[]>(queryOrder);

  return orders;
}

export default {
  getProducts,
  getOrders,
};
