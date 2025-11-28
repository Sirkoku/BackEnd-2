import CartsService from "../services/carts.service.js";

export const createC = async (req, res) => {
    res.json(await CartsService.createCart());
};

export const getC = async (req, res) => {
    res.json(await CartsService.getCart(req.params.cid));
};

export const addProduct = async (req, res) => {
    res.json(await CartsService.addProductToCart(req.params.cid, req.params.pid));
};
