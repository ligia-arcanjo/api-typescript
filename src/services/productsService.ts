import IProduct from '../interfaces/productInterface';
import productsModel from '../models/productsModel';

const getAllProducts = () => productsModel.getAllProducts();

const createProduct = async (product: IProduct) => {
  const insertId = await productsModel.createProduct(product);
  const newProduct = {
    id: insertId,
    name: product.name,
    amount: product.amount,
  };
  
  return newProduct;
};

export default { getAllProducts, createProduct };
