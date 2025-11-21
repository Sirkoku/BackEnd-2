import Cart from "../models/cart.model.js";

class CartManager {
    async createCart() {
        return await Cart.create({ products: [] });
    }

    async getCartById(cid) {
        return await Cart.findById(cid).populate("products.product");
    }

    async addProduct(cid, pid) {
        const cart = await Cart.findById(cid);
        if (!cart) return null;

        const item = cart.products.find(p => p.product.toString() === pid);

        if (item) {
            item.quantity++;
        } else {
            cart.products.push({ product: pid, quantity: 1 });
        }

        await cart.save();
        return cart;
    }

    async removeProduct(cid, pid) {
        const cart = await Cart.findById(cid);
        if (!cart) return null;

        cart.products = cart.products.filter(p => p.product.toString() !== pid);

        await cart.save();
        return cart;
    }

    async clearCart(cid) {
        const cart = await Cart.findById(cid);
        if (!cart) return null;

        cart.products = [];
        await cart.save();

        return cart;
    }
}

export default new CartManager();
