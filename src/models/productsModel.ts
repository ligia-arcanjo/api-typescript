import connection from './connection';

const getAllProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return products;
};

export default { getAllProducts };