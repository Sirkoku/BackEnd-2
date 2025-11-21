import { Router } from "express";
import ProductManager from "../dao/managers/productManager.js";
import { jwtAuth } from "../middlewares/auth.js";
import { authorizeRoles } from "../middlewares/authorize.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
    const { limit = 10, page = 1, sort } = req.query;

    const result = await ProductManager.getPaginated({
        limit,
        page,
        sort,
    });

    res.json({
        status: "success",
        payload: result.docs,
        totalPages: result.totalPages,
        prevPage: result.prevPage,
        nextPage: result.nextPage,
        page: result.page,
        hasPrevPage: result.hasPrevPage,
        hasNextPage: result.hasNextPage,
    });
} catch (error) {
    res.status(500).json({ status: "error", error: error.message });
}
});

router.get("/:pid", async (req, res) => {
    try {
    const product = await ProductManager.getById(req.params.pid);
    if (!product) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(product);
} catch (err) {
    res.status(500).json({ error: err.message });
}
});

router.post("/", jwtAuth, authorizeRoles("admin"), async (req, res) => {
    try {
        const created = await ProductManager.create(req.body);
        return res.status(201).json({
            message: "Producto creado",
            product: created
});
} catch (error) {
        console.error("Error al crear producto:", error.message);
        return res.status(500).json({
            error: "Error interno al crear producto",
            
});
}
});

router.put("/:pid", jwtAuth, authorizeRoles("admin"), async (req, res) => {
    try {
    const updated = await ProductManager.update(req.params.pid, req.body);
    res.json({ message: "Producto actualizado", product: updated });
} catch (error) {
    res.status(500).json({ error: error.message });
}
});

router.delete("/:pid", jwtAuth, authorizeRoles("admin"), async (req, res) => {
    try {
        const deleted = await ProductManager.remove(req.params.pid);

        if (!deleted) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        return res.json({ message: "Producto eliminado" });
    } catch (error) {
        return res.status(500).json({
            error: "Error al eliminar producto",
            details: error.message,
        });
    }
});
export default router;
