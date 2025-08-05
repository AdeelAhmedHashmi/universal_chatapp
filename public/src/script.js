import DOM from "./constants/indexDom.js";
import sendMessage from "./listeners/sendMessage.listener.js";
import { socketConnection } from "./socket.js";
import verifyUser from "./handler/verifyUser.handler.js";
import putUsernameAndChatid from "./dom/chatPage/getUsernameAndChatid.js";
import setProfileOnLocalStorage from "./utils/localProfile.js";
import _Toggler from "./dom/chatPage/toggle.js";
import updateProfile from "./handler/updateProfile.js";
import Render from "./utils/renderer.utils.js";

const sendBtn = DOM.sendBtn;
const updateProfileForm = DOM.updateForm;
let socket;

const user = await verifyUser();

if (user.status === "Success") {
    setProfileOnLocalStorage(user.response.data);
    socket = socketConnection();
    putUsernameAndChatid();
    Render.renderPreviousMessage(user.response.messages);
} else if (user.status === "Unauthorized") {
    window.location.href = "./login.html";
} else if (user.status === "Error") {
    window.location.href = "./err.html";
}

// else {
//     window.location.href = "./err.html";
// }

// getCrediential();
sendBtn.onclick = () => sendMessage(socket);
updateProfileForm.addEventListener("submit", updateProfile);
