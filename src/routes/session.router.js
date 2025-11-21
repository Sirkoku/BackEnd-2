import {Router} from "express";
import passport from "passport";
import User from "../dao/models/user.model.js";
import { isValidPassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";

const router = Router();

router.post("/login", async (req, res) => {
    try {
        console.log("BODY RECIBIDO:", req.body);

        const { email, password } = req.body;

        const user = await User.findOne({ email });
        console.log("USUARIO ENCONTRADO:", user);

        if (!user) return res.status(400).json({ message: "Usuario no encontrado" });

        console.log("PASSWORD RECIBIDO:", password);
        console.log("PASSWORD HASH DB:", user.password);

        const valid = isValidPassword(password, user);
        console.log("¿PASSWORD VALIDA?:", valid);

        if (!valid) return res.status(401).json({ message: "Contraseña incorrecta" });

        const token = generateToken(user);
        res.json({ message: "Login exitoso", token });
    } catch (error) {
        console.error("ERROR LOGIN:", error.message);
        res.status(500).json({ error: "Error en el login" });
    }
});

export default router;
