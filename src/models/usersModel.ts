import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/IUser';
import connection from './connection';

const createUser = async (user: IUser) => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [user.username, user.classe, user.level, user.password],
  );

  return result.affectedRows;
};

export default { createUser };
