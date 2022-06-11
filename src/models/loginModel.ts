import { User } from '../interfaces';
import connection from './connection';

async function getByUsername(userLogin: string): Promise<User | null> {
  const query = 'SELECT * FROM Trybesmith.Users WHERE username=?';

  const [data] = await connection.execute(query, [userLogin]);
  const [user] = data as User[];
  return user || null;
}

export default {
  getByUsername,
};
