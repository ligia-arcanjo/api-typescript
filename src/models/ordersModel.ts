import IOrder from '../interfaces/IOrder';
import connection from './connection';

const getAllOrders = async (): Promise<IOrder[]> => {
  const [orders] = await connection.execute('SELECT * FROM Trybesmith.Orders');

  return orders as IOrder[];
};

export default { getAllOrders };
