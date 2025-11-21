import { verifyToken } from "../utils/jwt.js";

export const jwtAuth = (req, res, next) => {
try {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).json({ error: "Token no proporcionado" });

    const token = authHeader.split(" ")[1];
    if (!token)
        return res.status(401).json({ error: "Formato de autorización inválido" });

    const decoded = verifyToken(token);
    if (!decoded)
        return res.status(401).json({ error: "Token inválido o expirado" });

    req.user = decoded;
    next();
} catch (error) {
    res.status(401).json({ error: "Token inválido" });
}
};
