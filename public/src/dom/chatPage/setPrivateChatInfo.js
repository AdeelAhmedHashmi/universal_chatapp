import DOM from "../../constants/indexDom.js";

const { listContainer } = DOM;

function eventToSetChatInfo(e) {
    if (e.target.parentNode.className === "item") {
        const itemBox = e.target.parentNode;
        const toChatId = itemBox.querySelector(".chatid").textContent;
        const myChatid = JSON.parse(
            localStorage.getItem("user_profile")
        ).chatId;

        localStorage.setItem(
            "chat_setting",
            JSON.stringify({
                from: myChatid,
                to: toChatId,
            })
        );
    }
}

listContainer.addEventListener("click", eventToSetChatInfo);
