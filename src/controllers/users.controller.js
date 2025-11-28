import { registerUser } from "../services/users.service.js";

export const register = async (req, res) => {
    try {
        const user = await registerUser(req.body);

        return res.status(201).json({
            status: "success",
            message: "Usuario registrado correctamente",
            user
        });

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: error.message
        });
    }
};
