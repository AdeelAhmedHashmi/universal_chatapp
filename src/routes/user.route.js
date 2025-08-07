import express from "express";
import {
    listContact,
    newContact,
    updateUser,
    userLogin,
    userLogout,
    userRegister,
    UserVerification,
    deleteContact,
} from "../controllers/user.controller.js";
import avatarUpload from "../middlewares/multer.middleware.js";
import verifyUser from "../middlewares/auth.middleware.js";

const userRouter = express.Router();
userRouter.post("/register", avatarUpload.none(), userRegister);
userRouter.post("/login", avatarUpload.none(), userLogin);
userRouter.post("/logout", verifyUser, userLogout);
userRouter.get("/verify", verifyUser, UserVerification);
userRouter.post(
    "/update",
    verifyUser,
    avatarUpload.single("profilePic"),
    updateUser
);

userRouter
    .route("/contact")
    .post(verifyUser, newContact)
    .get(verifyUser, listContact);

userRouter.post("/deletecontact", verifyUser, deleteContact);

export default userRouter;
