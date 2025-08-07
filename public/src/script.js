import DOM from "./constants/indexDom.js";
import sendMessage from "./listeners/sendMessage.listener.js";
import { socketConnection } from "./socket.js";
import verifyUser from "./handler/verifyUser.handler.js";
import putUsernameAndChatid from "./dom/chatPage/getUsernameAndChatid.js";
import setProfileOnLocalStorage from "./utils/localProfile.js";
import _Toggler from "./dom/chatPage/toggle.js";
import updateProfile from "./handler/updateProfile.js";
import sendAddContactForm from "./listeners/addContactForm.listener.js";
import { toggleChatType } from "./dom/chatPage/changeChat.js";
import getContacts from "./utils/getContacts.js";
import loading from "./dom/chatPage/showLoading.js";
import showLog from "./dom/chatPage/showlog.js";
import searchFilter from "./dom/chatPage/searchFilter.js";
import "../src/utils/deleteContact.utils.js";

const sendBtn = DOM.sendBtn;
const updateProfileForm = DOM.updateForm;
const newContactAddButton = DOM.newContactAddButton;
const inputField = DOM.inputField;
let socket;

loading("open", "wait for connecting to the server...");
const user = await verifyUser();
loading("close");

if (user.status === "Success") {
    setProfileOnLocalStorage(user.response.data, user.response.messages);
    socket = socketConnection();
    putUsernameAndChatid();
    getContacts();
    toggleChatType({ toggle: null });
    searchFilter();
} else if (user.status === "Unauthorized") {
    window.location.href = "./login.html";
} else if (user.status === "Error") {
    window.location.href = "./err.html";
} else {
    showLog(
        "Connection Error: ",
        "some thing went wrong! please refresh the page or check your internet connection.",
        "red"
    );
}

// else {
//     window.location.href = "./err.html";
// }

// getCrediential();
sendBtn.onclick = () => sendMessage(socket);
inputField.addEventListener("keyup", (e) => {
    console.log(e);
    if (e.key === "Enter" && e.shiftKey === false) {
        sendMessage(socket);
    }
});
updateProfileForm.addEventListener("submit", updateProfile);
newContactAddButton.addEventListener("click", async (e) => {
    e.preventDefault();
    await sendAddContactForm();
});
