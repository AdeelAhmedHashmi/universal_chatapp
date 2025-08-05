import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import Contact from "../models/contact.models.js";
import {
    deleteOnCloudinary,
    uploadOnCloudinary,
} from "../utils/cloudinary.utils.js";
import { getMessage } from "../utils/globalMessages.utils.js";

const userRegister = async (req, res) => {
    if (
        !req.body ||
        !req.body.username ||
        !req.body.chatId ||
        !req.body.password
    ) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    const { username, chatId, password } = req.body;

    if (!username || !chatId || !password) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    const filteredUsername = username.trim().toLowerCase();
    const filteredChatId = chatId.trim();
    const filteredPassword = password.trim();

    try {
        const existingUser = await User.findOne({
            $or: [{ username }, { chatId }],
        });

        if (existingUser) {
            if (existingUser.username === filteredUsername) {
                return res
                    .status(400)
                    .json({ message: "Username not available!" });
            }

            if (existingUser.chatId === filteredChatId) {
                return res
                    .status(400)
                    .json({ message: "Chatid not available!" });
            }
        }

        const user = await User.create({
            username: filteredUsername,
            chatId: filteredChatId,
            password: filteredPassword,
        });

        user.password = "";
        return res
            .status(201)
            .json({ message: "you are successfully register!", data: user });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: err.message });
    }
};

const userLogin = async (req, res) => {
    const { chatId, password } = req.body;

    const filteredChatId = chatId.trim();
    const filteredPassword = password.trim();

    if (!chatId || !password) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    try {
        const user = await User.findOne({
            chatId: filteredChatId,
        });
        if (!user)
            return res.status(400).json({ message: "Invalid Credentials!" });

        const isPasswordValid = await user.isPasswordValid(filteredPassword);
        if (!isPasswordValid)
            return res.status(400).json({ message: "Invalid Credentials!" });

        const accessToken = await user.generateAccessToken();

        res.cookie("AccessToken", accessToken, {
            httpOnly: true,
            secure: process.NODE_ENV === "PRODUCTION",
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7days
        });

        return res.status(200).json({ message: "User login successfully!" });
    } catch (err) {
        return res.status(400).json({ message: err });
    }
};

const userLogout = (req, res) => {
    if (req.user) {
        res.clearCookie("AccessToken", {
            httpOnly: true,
            secure: process.NODE_ENV === "PRODUCTION",
            path: "/",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.status(200).json({
            messgae: "User soccessfully logout!",
        });
    }
    res.status(401).json({
        messgae: "Unauthorized Request!",
    });
};

const UserVerification = async (req, res) => {
    if (!req.user) res.status(400).json({ message: "User not login!" });

    try {
        const user = await User.findById(req.user).select("-password -__v");

        if (!user) res.status(400).json({ message: "User not register!" });

        const data = await getMessage(); // [true, { }]
        let messages;
        if (data[0]) {
            messages = data[1];
        }

        res.status(200).json({
            message: "user is authorized!",
            data: user,
            messages,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateUser = async (req, res) => {
    if (!req.user)
        return res.status(401).json({
            message: "User not Authorized!",
        });

    if (!req.body.username)
        return res.status(400).json({
            message: "username must be required!",
        });

    try {
        const user_info = await User.findById(req.user);
        const isUserNameNotChange = user_info.username === req.body.username;
        if (isUserNameNotChange && !req.file) {
            return res.status(400).json({
                message: "nothing can change!",
            });
        }

        let file;
        let updatedUser;
        if (req.file) {
            const user = await User.findById(req.user);
            const oldAvatar = user.avatarPublicId;

            const response = await deleteOnCloudinary(oldAvatar);
            console.log(response);

            file = await uploadOnCloudinary(req.file.path);
            console.log(
                "user.controller.js > image upload on cloudinary at url: ",
                file.url
            );
        }

        if (file) {
            updatedUser = await User.findByIdAndUpdate(req.user, {
                avatar: file.url,
                avatarPublicId: file.public_id,
                username: req.body.username,
            });
        } else if (!isUserNameNotChange) {
            updatedUser = await User.findByIdAndUpdate(req.user, {
                username: req.body.username,
            });
        }

        res.status(200).json({
            message: "user profile updated!",
            data: updatedUser,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message,
        });
    }
};

const newContact = async (req, res) => {
    if (!req.user)
        return res.status(401).json({ message: "User not Authorized!" });

    if (!req.body)
        return res.status(400).json({ message: "date must be contains!" });

    if (!req.body.contactName || !req.body.chatId) {
        return res
            .status(400)
            .json({ message: "contact name and chatid is required!" });
    }

    const { contactName, chatId } = req.body;

    try {
        const contact = await Contact.create({
            user: req.user,
            contactname: contactName,
            number: chatId,
        });

        if (!contact)
            return res.status(500).json({ message: "New contact not saved!" });

        return res
            .status(200)
            .json({ message: "New contact saved successfully!" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
export {
    userRegister,
    userLogin,
    userLogout,
    UserVerification,
    updateUser,
    newContact,
};
