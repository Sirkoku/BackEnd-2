
import CartManager from "../dao/managers/cartManager.js";

export const authorizeCartOwner = async (req, res, next) => {
    const cid = req.params.cid;
    const cart = await CartManager.getCartById(cid);
    if (!cart) return res.status(404).json({ error: "Carrito no encontrado" });


    if (req.user.role === "admin" || cart.owner.toString() === req.user.id) return next();

    return res.status(403).json({ error: "No autorizado" });
};
