import express from "express";
import {
    newContact,
    updateUser,
    userLogin,
    userLogout,
    userRegister,
    UserVerification,
} from "../controllers/user.controller.js";
import avatarUpload from "../middlewares/multer.middleware.js";
import verifyUser from "../middlewares/auth.middleware.js";
import multer from "multer";

const userRouter = express.Router();
userRouter.post("/register", avatarUpload.single("avatar"), userRegister);
userRouter.post("/login", avatarUpload.none(), userLogin);
userRouter.post("/logout", verifyUser, userLogout);
userRouter.route("/verify").get(verifyUser, UserVerification);
userRouter.post(
    "/update",
    verifyUser,
    avatarUpload.single("profilePic"),
    updateUser
);
userRouter.post("/contact", verifyUser, newContact);

export default userRouter;
