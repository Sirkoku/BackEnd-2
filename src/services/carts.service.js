import CartManager from "../dao/managers/cartManager.js";

class CartsService {
  constructor() {
    this.cartManager = new CartManager();
  }

  async createCart(ownerId) {
    return await this.cartManager.createCart(ownerId);
  }

  async getCart(id) {
    return await this.cartManager.getCart(id);
  }

  async addProductToCart(cid, pid, quantity = 1) {
    return await this.cartManager.addProduct(cid, pid, quantity);
  }

  async removeProductFromCart(cid, pid) {
    return await this.cartManager.removeProduct(cid, pid);
  }

  async clearCart(cid) {
    return await this.cartManager.clearCart(cid);
  }

  async updateQuantity(cid, pid, quantity) {
    return await this.cartManager.updateQuantity(cid, pid, quantity);
  }
}

export default new CartsService();
