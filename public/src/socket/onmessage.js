import informUser from "../handler/join.handler.js";
import Render from "../utils/renderer.utils.js";

function onmessageHandler(event) {
    const message = JSON.parse(event.data);

    if (message.type === "BROADCAST") {
        console.log("Private Message: ", message.message);
        Render.renderMessage(message, "other");
    } else if (message.type === "JOINED") {
        informUser(message);
    }

    Render.renderPeople(message.clientList);
}

export default onmessageHandler;
