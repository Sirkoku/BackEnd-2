import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import User from "../dao/models/user.model.js";

dotenv.config();

const initializePassport = () => {
const cookieExtractor = (req) => {
    let token = null;
    if (req && req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
    }
    return token;
};

const opts = {
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: process.env.JWT_SECRET
};

passport.use(
    "jwt",
    new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        const user = await User.findById(jwt_payload.user._id);
        if (!user) return done(null, false);
        return done(null, user);
    } catch (error) {
        return done(error, false);
    }
    })
);
};

export default initializePassport;
