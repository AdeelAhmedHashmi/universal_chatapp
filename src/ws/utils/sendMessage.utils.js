import { storeMessage } from "../../utils/globalMessages.utils.js";

class _Send {
    constructor(wss, ws, clientMessage) {
        this.wss = wss;
        this.ws = ws;
        this.message = clientMessage;

        const clientsList = this.getCllients();
        this.message.clientList = clientsList;
        this.parsedMessage = JSON.stringify(this.message);
    }

    getCllients() {
        let clientsMap = [];

        const clients = Array.from(this.wss.clients);

        for (let i = 0; i < clients.length; i++) {
            const client = clients[i];
            if (client.id && client.name) {
                clientsMap.push({
                    chatId: client.id,
                    username: client.name,
                });
            }
        }

        return clientsMap;
    }

    async group() {
        if (this.message.type !== "JOINED") {
            await storeMessage({
                from: this.message.from,
                message: this.message.message,
                date: this.message.date,
            });
        }

        this.wss.clients.forEach((client) => {
            if (client.readyState === 1 && client !== this.ws) {
                client.send(this.parsedMessage);
            }
        });
    }
}

export default _Send;
