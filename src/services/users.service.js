import userManager from "../dao/managers/userManager.js";
import { hashPassword } from "../utils/bcrypt.js";

export const registerUser = async (userData) => {
    const { email, password } = userData;

    const exists = await userManager.getByEmail(email);
    if (exists) throw new Error("El usuario ya existe");

    const hashed = hashPassword(password);

    return await userManager.create({
        ...userData,
        password: hashed,
        role: "user"
    });
};
