export const authorizeRoles = (...allowedRoles) => {
return (req, res, next) => {
    try {
        if (!req.user)
        return res.status(401).json({ error: "No autenticado" });

        if (!allowedRoles.includes(req.user.role))
        return res.status(403).json({ error: "No autorizado" });

        next();
    } catch (error) {
        res.status(403).json({ error: "Acceso denegado" });
    }
};
};
