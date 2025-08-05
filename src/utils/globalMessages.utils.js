import Message from "../models/messages.model.js";

async function storeMessage(messageDate) {
    const { from, message, date } = messageDate;
    try {
        await Message.create({
            from,
            message,
            date,
        });
    } catch (err) {
        console.log(err);
    }
}

async function getMessage() {
    try {
        const messages = await Message.find();

        if (!messages) return [false, ""];

        return [true, messages];
    } catch (err) {
        console.error(err);
        return [false, err.message];
    }
}
export { storeMessage, getMessage };
