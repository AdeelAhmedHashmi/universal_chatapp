import dbConnection from "./db/index.js";
import http from "http";
import app from "./app.js";
import config from "./config/config.js";
import { createWebsocketServer } from "./ws/websocketserver.js";

const server = http.createServer(app);
createWebsocketServer(server);

try {
    dbConnection();
    server.listen(config.port, "0.0.0.0", () => {
        console.log(`Server is listening on http://localhost:${config.port}`);
    });
} catch (err) {
    console.log("Server listening Error: ", err);
}
