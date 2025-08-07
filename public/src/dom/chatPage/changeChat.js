import DOM from "../../constants/indexDom.js";
import Render from "../../utils/renderer.utils.js";

const {
    leftBarTitle,
    topbarTitle,
    newContactBtn,
    chatTypeIndicator,
    chatTypeToggleBtn,
} = DOM;

function toggleChatType(options) {
    const { toggle } = options;

    const types = {
        global: "private",
        private: "global",
    };

    let chatType;
    if (!toggle) {
        chatType = localStorage.getItem("chat_type");
        if (!chatType) {
            localStorage.setItem("chat_type", "global");
            chatType = localStorage.getItem("chat_type");
        }
    } else if (toggle) {
        localStorage.setItem("chat_type", types[toggle]);
        chatType = localStorage.getItem("chat_type");
    }
    changeChatType(chatType);
}

function changeChatType(chatType) {
    if (chatType === "private") {
        leftBarTitle.textContent = "Your Contacts";
        topbarTitle.textContent = "Private";
        newContactBtn.classList.remove("hide");
        chatTypeIndicator.innerHTML = `<i class="fa-solid fa-comment-dots"></i>`;
        chatTypeToggleBtn.innerHTML = `<i class="fas fa-users"></i>`;
    } else {
        leftBarTitle.textContent = "Joined People";
        topbarTitle.textContent = "Global";
        newContactBtn.classList.add("hide");
        chatTypeIndicator.innerHTML = `<i class="fas fa-users"></i>`;
        chatTypeToggleBtn.innerHTML = `<i class="fa-solid fa-comment-dots"></i>`;
    }
    Render.renderPreviousMessage();
}

export { toggleChatType };
