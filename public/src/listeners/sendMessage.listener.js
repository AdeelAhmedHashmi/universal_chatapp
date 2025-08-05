import DOM from "../constants/indexDom.js";
import Render from "../utils/renderer.utils.js";
import vars from "../constants/variables.js";
import getDate from "../utils/getDate.utils.js";

const { inputField } = DOM;

function sendMessage(socket) {
    if (inputField.value.trim() != "") {
        socket.send(
            JSON.stringify({
                type: vars.methods.broadcast,
                from: vars.clientInfo.name,
                to: "all",
                clientId: vars.clientInfo.clientId,
                message: inputField.value,
                date: getDate("full"),
            })
        );
        Render.renderMessage(
            {
                message: inputField.value,
                from: vars.clientInfo.name,
                date: getDate("full"),
            },
            "self"
        );
        inputField.value = "";
    }
}

export default sendMessage;
