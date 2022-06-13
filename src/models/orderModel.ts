import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

async function create(userId: number | undefined) {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';

  const [result] = await connection.execute<ResultSetHeader>(query, [userId]);
  const { insertId: id } = result;
  return id;
}

export default {
  getProducts,
  getOrders,
  create,
};
