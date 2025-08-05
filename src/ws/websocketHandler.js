import messageHandler from "./messageHandler.js";
import disconnectHandler from "./disconnectHandler.js";

const handleConnection = (wss, ws) => {
    ws.on("message", (data) => {
        messageHandler(wss, ws, data);
    });

    ws.on("close", () => {
        console.log();
        disconnectHandler(wss, ws);
    });
};

export default handleConnection;
