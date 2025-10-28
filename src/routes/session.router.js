import express from "express";
import passport from "passport";
import User from "../models/user.model.js";
import { isValidPassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/jwt.js";

const router = express.Router();


router.post("/login", async (req, res) => {
try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Usuario no encontrado" });

    const valid = isValidPassword(password, user);
    if (!valid) return res.status(401).json({ message: "Contraseña incorrecta" });

    const token = generateToken(user);
    res.json({ message: "Login exitoso", token });
} catch (error) {
    res.status(500).json({ error: "Error en el login" });
}
});

// ruta protegida
router.get(
"/current",
passport.authenticate("jwt", { session: false }),
(req, res) => {
    res.json({ user: req.user });
}
);

export default router;
