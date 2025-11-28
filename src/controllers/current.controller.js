import { toCurrentUserDTO } from "../dto/currentUser.dto.js";

export const current = (req, res) => {
    if (!req.user) return res.status(401).json({ error: "Unauthorized" });
    const dto = toCurrentUserDTO(req.user);
    res.json({ status: "success", payload: dto });
};
