import { Router } from "express";
import passport from "passport";
import { loginSuccess } from "../controllers/sessions.controller.js";

const router = Router();

router.post("/login",
  passport.authenticate("login", { failureRedirect: "/fail" }),
  loginSuccess
);

router.get("/fail", (req, res) => {
  res.status(400).json({ error: "login fail" });
});

export default router;
