import { ResultSetHeader } from 'mysql2';
import { User } from '../interfaces';
import connection from './connection';

async function create(user: User): Promise<User> {
  const { username, classe, level, password } = user;
  const query = 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)';
  const values = [username, classe, level, password];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  const newUser: User = { id, username, classe, level, password };

  return newUser;
}

export default {
  create,
};
