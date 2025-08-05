import vars from "../constants/variables.js";
import message from "../utils/messageGenerator.utils.js";

function onopenHandler(socket) {
    console.log("WebSocket connection established!");
    socket.send(
        message(
            vars.methods.joined,
            vars.clientInfo.name,
            "all",
            vars.clientInfo.clientId,
            "i am joined!"
        )
    );
}

export default onopenHandler;
