import { Router } from "express";
import cartManager from "../dao/managers/cartManager.js";

const router = Router();

router.post("/", async (req, res) => {
    try {
        const cart = await cartManager.createCart();
        res.status(201).json({ message: "Carrito creado", cart });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:cid", async (req, res) => {
    try {
        const cart = await cartManager.getCartById(req.params.cid);
        if (!cart) return res.status(404).json({ error: "Carrito no encontrado" });

        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/:cid/product/:pid", async (req, res) => {
    try {
        const updated = await cartManager.addProduct(req.params.cid, req.params.pid);
        if (!updated) return res.status(404).json({ error: "Carrito no encontrado" });

        res.json({ message: "Producto agregado", cart: updated });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete("/:cid/product/:pid", async (req, res) => {
    try {
        const updated = await cartManager.removeProduct(req.params.cid, req.params.pid);
        if (!updated) return res.status(404).json({ error: "Carrito no encontrado" });

        res.json({ message: "Producto eliminado", cart: updated });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete("/:cid", async (req, res) => {
    try {
        const cleared = await cartManager.clearCart(req.params.cid);
        if (!cleared) return res.status(404).json({ error: "Carrito no encontrado" });

        res.json({ message: "Carrito vaciado", cart: cleared });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
