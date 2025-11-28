import { Router } from "express";
import { createC, getC, addProduct } from "../controllers/carts.controller.js";

const router = Router();

router.post("/", createC);
router.get("/:cid", getC);
router.post("/:cid/product/:pid", addProduct);

export default router;
