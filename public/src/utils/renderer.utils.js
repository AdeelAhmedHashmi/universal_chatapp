import DOM from "../constants/indexDom.js";
import informUser from "../handler/join.handler.js";

class _Render {
    constructor() {
        this.container = DOM.container;
        this.listContainer = DOM.listContainer;
    }
    renderMessage(data, state) {
        const container = this.container;
        const { message, from, date } = data;

        this.container.scrollTop = this.container.scrollHeight;

        const msgBox = document.createElement("div");
        msgBox.className = state;
        msgBox.innerText = message;

        if (state === "other") {
            const nameBox = document.createElement("div");
            nameBox.id = "title";
            nameBox.innerHTML = `<p>${from}</p><p>${date}</p>`;
            msgBox.prepend(nameBox);
        }
        container.appendChild(msgBox);
    }
    renderPreviousMessage(messages) {
        const chatType = localStorage.getItem("chat_type");
        console.log(chatType);
        if (chatType === "private") return;
        if (!messages) return;
        console.log(messages);

        const username = JSON.parse(
            localStorage.getItem("user_profile")
        ).username;

        for (let i = 0; i < messages.length; i++) {
            const message = messages[i];
            if (message.message !== "i am joined!") {
                if (message.from === username) {
                    this.renderMessage(message, "self");
                } else {
                    this.renderMessage(message, "other");
                }
            }
        }
    }
    renderJoinedPeople(clientList) {
        for (let i = 0; i < clientList.length; i++) {
            const client = clientList[i];
            const list = document.createElement("div");
            list.classList.add("item");
            list.innerHTML = `
                <div class="username">${client.username}</div>
                <div class="chatid">${client.chatId}</div>
            `;
            this.listContainer.innerHTML = "";
            this.listContainer.appendChild(list);
        }
    }
}

const Render = new _Render();
export default Render;
