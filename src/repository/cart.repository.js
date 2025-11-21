export default class CartRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getCartById = (id) => {
    return this.dao.getCartById(id);
  };

  createCart = () => {
    return this.dao.createCart();
  };

  addProductToCart = (cid, pid) => {
    return this.dao.addProductToCart(cid, pid);
  };

  updateProductQuantity = (cid, pid, quantity) => {
    return this.dao.updateProductQuantity(cid, pid, quantity);
  };

  emptyCart = (cid) => {
    return this.dao.emptyCart(cid);
  };

  removeProduct = (cid, pid) => {
    return this.dao.removeProduct(cid, pid);
  };
}
