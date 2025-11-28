import ProductManager from "../dao/managers/productManager.js";
const productManager = new ProductManager();

export const getProducts = async () => {
    return await productManager.getAll();
};

export const getProductById = async (id) => {
    return await productManager.getById(id);
};

export const createProduct = async (data) => {
    return await productManager.create(data);
};

export const updateProduct = async (id, data) => {
    return await productManager.update(id, data);
};

export const deleteProduct = async (id) => {
    return await productManager.delete(id);
};
