import { Request, Response } from 'express';
import loginService from '../services/loginService';

const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;

  try {
    const token = await loginService.login(username, password);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({ message: (error as Error).message });
  }
};

export default { login };
