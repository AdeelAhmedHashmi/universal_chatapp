import DOM from "../constants/indexDom.js";
import Render from "../utils/renderer.utils.js";
import vars from "../constants/variables.js";
import getDate from "../utils/getDate.utils.js";
import showLog from "../dom/chatPage/showlog.js";

const { inputField } = DOM;

function sendMessage(socket) {
    const chatType = localStorage.getItem("chat_type");

    if (inputField.value.trim() != "") {
        console.log(inputField.value);
        if (chatType === "global") {
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
        } else {
            showLog(
                "Info!",
                "you are in private mode, your post cannot send to other people!",
                "orange"
            );
        }
        Render.renderMessage(
            {
                message: inputField.value,
                from: vars.clientInfo.name,
                date: getDate("full"),
            },
            "self"
        );
        document.querySelector(".emojiBox").style.display = "flex";
        inputField.value = "";
    }
}

export default sendMessage;
