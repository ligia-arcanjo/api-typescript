import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/IProduct';
import connection from './connection';

const getAllProducts = async (): Promise<IProduct[]> => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products');

  return products as IProduct[];
};

const createProduct = async (product: IProduct) => {
  const [insertProduct] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );
  
  return insertProduct.insertId;
};

export default { getAllProducts, createProduct };
