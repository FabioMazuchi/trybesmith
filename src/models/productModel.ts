import { ResultSetHeader } from 'mysql2';
import { Product } from '../interfaces';
import connection from './connection';

async function getAll(): Promise<Product[]> {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [products] = await connection.execute(query);

  return products as Product[];
}

async function create(product: Product): Promise<Product> {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const values = [name, amount];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  const newProduct: Product = { id, name, amount };

  return newProduct;
}

export default {
  getAll,
  create,
};
