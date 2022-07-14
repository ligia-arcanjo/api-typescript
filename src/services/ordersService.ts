import ordersModel from '../models/ordersModel';
import productsModel from '../models/productsModel';

const getAllOrders = async () => {
  const orders = await ordersModel.getAllOrders();
  const products = await productsModel.getAllProducts();

  const orderWithProducts = orders.map((order) => ({
    id: order.id,
    userId: order.userId,
    productsIds: products
      .filter((product) => order.id === product.orderId).map((product) => product.id),
  }));

  return orderWithProducts;
};

export default { getAllOrders };
