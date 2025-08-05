import DOM from "../../constants/indexDom.js";

const { leftBarTitle, topbarTitle, newContactBtn } = DOM;

function toggleChatType(toggle) {
    const types = {
        global: "private",
        private: "global",
    };
    const chatType = localStorage.getItem("chat_type");
    if (!chatType) {
        localStorage.setItem("chat_type", "global");
        chatType = localStorage.getItem("chat_type");
    }

    if (toggle) {
        localStorage.setItem("chatType", types[chatType]);
    }
    changeChatType(chatType);
}

function changeChatType(chatType) {
    if (chatType === "private") {
        leftBarTitle.textContent = "Your Contacts";
        topbarTitle.textContent = "Private";
        newContactBtn.classList.remove("hide");
    } else {
        leftBarTitle.textContent = "Joined People";
        topbarTitle.textContent = "Global";
        newContactBtn.classList.add("hide");
    }
}

export { toggleChatType };
