import express from "express";
import User from "../models/user.model.js";
import { createHash } from "../utils/bcrypt.js";

const router = express.Router();


router.post("/register", async (req, res) => {
try {
    const { first_name, last_name, email, age, password } = req.body;
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: "Usuario ya existe" });

    const hashedPassword = createHash(password);
    const newUser = new User({ first_name, last_name, email, age, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Usuario creado correctamente", user: newUser });
} catch (error) {
    res.status(500).json({ error: "Error al registrar usuario" });
}
});

export default router;
