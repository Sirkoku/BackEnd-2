export default class ProductRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getProducts = () => {
    return this.dao.getProducts();
  };

  getProductById = (id) => {
    return this.dao.getProductById(id);
  };

  createProduct = (product) => {
    return this.dao.createProduct(product);
  };

  updateProduct = (id, data) => {
    return this.dao.updateProduct(id, data);
  };

  deleteProduct = (id) => {
    return this.dao.deleteProduct(id);
  };
}
