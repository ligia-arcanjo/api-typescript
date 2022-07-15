import generateToken from '../utils/jwt';
import usersModel from '../models/usersModel';

const login = async (username: string, password: string) => {
  const [user] = await usersModel.getUser(username);
  
  if (!user) throw new Error('Username or password invalid');

  if (user.password !== password) throw new Error('Username or password invalid');

  return generateToken(username);
};

export default { login };
