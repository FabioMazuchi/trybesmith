import { Product } from '../interfaces';

import connection from './connection';

async function getAll(): Promise<Product[]> {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [products] = await connection.execute(query);

  return products as Product[];
}

export default {
  getAll,
};
