import DOM from "../constants/indexDom.js";

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

    renderPreviousMessage() {
        const chatType = localStorage.getItem("chat_type");

        this.listContainer.innerHTML = "";

        if (chatType === "private") {
            const contacts = JSON.parse(localStorage.getItem("user_contacts"));
            this.container.innerHTML = `<div class="messages-background"></div>`;
            for (let i = 0; i < contacts.length; i++) {
                const contact = contacts[i];
                const list = document.createElement("div");
                list.classList.add("item");
                list.innerHTML = `
                <div class="username">${contact.contactname}</div>
                <div class="chatid">${contact.number}</div>
                <img id="trash" class="icon" src="./src/asserts/icons/trash.svg" />
                `;
                this.listContainer.appendChild(list);
            }
        } else {
            const messages = JSON.parse(
                localStorage.getItem("global_messages")
            );

            this.container.innerHTML = `<div class="messages-background"></div>`;
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
    }

    oneItem(state, target = null, username, chatid) {
        if (state === "add") {
            const list = document.createElement("div");
            list.classList.add("item");
            list.innerHTML = `
                <div class="username">${username}</div>
                <div class="chatid">${chatid}</div>
                <img id="trash" class="icon" src="./src/asserts/icons/trash.svg" />
            `;
            this.listContainer.appendChild(list);
        } else {
            target.remove();
        }
    }

    renderPeople(clientList) {
        const chatType = localStorage.getItem("chat_type");

        this.listContainer.innerHTML = "";
        if (chatType === "global") {
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
}

const Render = new _Render();
export default Render;
