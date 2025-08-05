import verifyUser from "./handler/verifyUser.handler.js";
import onmessageHandler from "./socket/onmessage.js";
import onopenHandler from "./socket/onopen.js";

function socketConnection() {
    const socket = new WebSocket("ws://localhost:8080");

    socket.addEventListener("open", () => onopenHandler(socket));
    socket.addEventListener("message", onmessageHandler);

    return socket;
}

export { socketConnection };
