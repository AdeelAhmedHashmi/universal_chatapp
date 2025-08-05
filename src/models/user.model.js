import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        chatId: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: false,
        },
        avatarPublicId: {
            type: String,
            require: false,
        },
        numbers: [
            {
                type: String,
            },
        ],
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        try {
            const hashed = await bcrypt.hash(this.password, 10);
            this.password = hashed;
            next();
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
});

userSchema.methods.isPasswordValid = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            id: this._id,
        },
        config.token_secret,
        {
            expiresIn: "7d",
        }
    );
};

const User = mongoose.model("User", userSchema);

export { User };
