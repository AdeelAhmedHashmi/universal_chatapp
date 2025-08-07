import DOM from "../constants/indexDom.js";
import chatIdValidator from "../utils/chatIdValidator.utils.js";
import vars from "../constants/variables.js";
import loading from "../dom/chatPage/showLoading.js";
import showLog from "../dom/chatPage/showlog.js";
import Render from "../utils/renderer.utils.js";

const { newContactNameInput, newContactChatidInput } = DOM;

async function sendData(contactName, chatId) {
    const response = await fetch(vars.serverUrls.numbers, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            contactName,
            chatId,
        }),
    });

    const data = await response.json();
    return {
        status: response.status,
        message: response.message,
    };
}

async function sendAddContactForm() {
    const chatid = newContactChatidInput.value.trim();
    const contactName = newContactNameInput.value.trim();

    if (!chatid || !contactName) return;

    const ChatidValidation = chatIdValidator(chatid);

    if (!ChatidValidation.isValid) return;
    if (contactName.length < 3) return;

    loading("open", "new contact saving...");
    const response = await sendData(contactName, chatid);
    loading("close");
    if (response.status === 200) {
        showLog("Succesfull!", "New Contact saved successfully!", "green");
        Render.oneItem("add", null, contactName, chatid);
    } else {
        showLog("Error!", "Some thing went wrong, new contact not saved!");
    }
}

export default sendAddContactForm;
