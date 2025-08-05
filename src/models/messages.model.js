import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
    from: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

const Message = mongoose.model("Message", messageSchema);
export default Message;
