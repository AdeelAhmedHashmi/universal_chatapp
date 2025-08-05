import jwt from "jsonwebtoken";
import config from "../config/config.js";
import { User } from "../models/user.model.js";

const verifyUser = async (req, res, next) => {
    if (!req.cookies.AccessToken)
        return res
            .status(401)
            .json({ message: "Token not found Unauthorized request!" });

    const decode = jwt.verify(req.cookies.AccessToken, config.token_secret);

    if (!decode)
        return res
            .status(401)
            .json({ message: "Token is invalid Unauthorized request!" });

    const isUserExist = await User.findById(decode.id);

    if (!isUserExist)
        return res
            .status(401)
            .json({ message: "User not found Unauthorized request!" });

    req.user = isUserExist._id;
    next();
};

export default verifyUser;
