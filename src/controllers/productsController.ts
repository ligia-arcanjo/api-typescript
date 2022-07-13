import { Request, Response } from 'express';
import productsService from '../services/productsService';

const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  const products = await productsService.getAllUsers();

  return res.status(200).json(products);
};

export default getAllUsers;
