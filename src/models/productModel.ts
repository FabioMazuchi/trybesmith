import { ResultSetHeader } from 'mysql2';
import { Product } from '../interfaces';
import connection from './connection';

async function getAll(): Promise<Product[]> {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [products] = await connection.execute(query);

  return products as Product[];
}

async function getById(id: number): Promise<Product | null> {
  const query = 'SELECT name, amount FROM Trybesmith.Products WHERE id=?';
  
  const [data] = await connection.execute(query, [id]);
  const [product] = data as Product[];
  return product || null;
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

async function createProduct(product: Product) {
  const { name, amount, orderId } = product;
  const query = 'INSERT INTO Trybesmith.Products (name, amount, orderId) VALUES (?,?,?)';
  const values = [name, amount, orderId];
  await connection.execute(query, values);
}

export default {
  getAll,
  create,
  getById,
  createProduct,
};
