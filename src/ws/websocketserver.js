import { WebSocketServer } from "ws";
import handleConnection from "./websocketHandler.js";

const createWebsocketServer = (server) => {
    const wss = new WebSocketServer({ server });
    console.log("Websocket Server Initailized!");

    wss.on("connection", (ws) => {
        handleConnection(wss, ws);
    });
};

export { createWebsocketServer };
