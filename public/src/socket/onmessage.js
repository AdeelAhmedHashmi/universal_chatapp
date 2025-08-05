import informUser from "../handler/join.handler.js";
import Render from "../utils/renderer.utils.js";

function onmessageHandler(event) {
    console.log("Message from server: ", event.data);
    const message = JSON.parse(event.data);

    if (message.type === "BROADCAST") {
        Render.renderMessage(message, "other");
    } else if (message.type === "JOINED") {
        informUser(message);
    }

    Render.renderJoinedPeople(message.clientList);
}

export default onmessageHandler;
