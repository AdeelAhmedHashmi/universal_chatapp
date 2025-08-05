import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    contactname: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
