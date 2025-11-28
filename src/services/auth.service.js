import UserService from "./users.service.js";
import { generateToken } from "../utils/jwt.js";
import { isValidPassword } from "../utils/bcrypt.js";

class AuthService {
    async register(data) {
        const userExists = await UserService.getByEmail(data.email);
        if (userExists) return null;

        const user = await UserService.createUser(data);
        return user;
    }

    async login(email, password) {
        const user = await UserService.getByEmail(email);
        if (!user) return null;

        const valid = await isValidPassword(password, user.password);
        if (!valid) return null;

        const token = generateToken({
            id: user._id,
            role: user.role,
            email: user.email
        });

        return { user, token };
    }
}

export default new AuthService();
