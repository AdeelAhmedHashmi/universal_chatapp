import _Send from "./utils/sendMessage.utils.js";

const messageHandler = async (wss, ws, rawMessage) => {
    try {
        const message = JSON.parse(rawMessage);
        const Send = new _Send(wss, ws, message);

        if (message.type == "JOINED") {
            ws.id = message.chatid;
            ws.name = message.from;
        }

        if (message.type == "JOINED" || message.type == "BROADCAST") {
            await Send.group();
        }
    } catch (err) {
        console.log("WebSocket Message Err: ", err);
        ws.send("Invalid message formate!");
    }
};

export default messageHandler;
