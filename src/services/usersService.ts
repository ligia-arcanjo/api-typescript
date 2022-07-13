import IUser from '../interfaces/IUser';
import usersModel from '../models/usersModel';
import generateToken from '../utils/jwt';

const createUser = async (user: IUser) => {
  const newUser = await usersModel.createUser(user);

  if (!newUser) {
    throw new Error('Could not register');
  }

  const token = generateToken(user.username);
  return token;
};

export default { createUser };
