import {Router} from "express";
import User from "../dao/models/user.model.js";
import { createHash } from "../utils/bcrypt.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
    const users = await User.find();
    res.json(users);
} catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
}
});

router.post("/register", async (req, res) => {
    try {
    const { first_name, last_name, email, age, password, role } = req.body;
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: "Usuario ya existe" });

    const hashedPassword = createHash(password);
    const newUser = new User({
        first_name,
        last_name,
        email,
        age,
        password: hashedPassword,
        role : role || "user"
    });

    await newUser.save();

    res.status(201).json({
        message: "Usuario creado correctamente",
        user: newUser
    });
} catch (error) {
    res.status(500).json({ error: "Error al registrar usuario" });
}
});

export default router;
