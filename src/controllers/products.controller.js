import { 
    createProduct, 
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct 
} from "../services/products.service.js";

export const getAll = async (req, res) => {
    res.json(await getProducts());
};

export const create = async (req, res) => {
    res.json(await createProduct(req.body));
};

export const getOne = async (req, res) => {
    res.json(await getProductById(req.params.id));
};

export const updateOne = async (req, res) => {
    res.json(await updateProduct(req.params.id, req.body));
};

export const deleteOne = async (req, res) => {
    res.json(await deleteProduct(req.params.id));
};
