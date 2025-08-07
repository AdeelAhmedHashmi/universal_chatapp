import DOM from "../../constants/indexDom.js";
import searchFilter from "./searchFilter.js";
import _Toggler from "./toggle.js";
import _Theme from "./theme.js";
import sliders from "./sliders.js";
import filePreviewer from "./filePreviewer.js";
import { toggleChatType } from "./changeChat.js";
import "./Emojis.js";
import "./setPrivateChatInfo.js";
import "./theme.js";

const Toggler = new _Toggler();
const {
    leftMenuBar,
    leftMenuBackIcon,
    addPeopleIcon,
    profileEditIcon,
    cancleProfilePopupBtn,
    settingBtn,
    rightMenuBackIcon,
    newContactCloseButton,
    newContactAddButton,
    chatTypeToggleBtn,
} = DOM;

sliders();
filePreviewer();

function showhideMenuBackBtn() {
    if (getComputedStyle(leftMenuBar).position === "absolute") {
        leftMenuBackIcon.style.opacity = "1";
        rightMenuBackIcon.style.opacity = "1";
    } else {
        leftMenuBackIcon.style.opacity = "0";
        rightMenuBackIcon.style.opacity = "0";
    }
}

showhideMenuBackBtn();
window.onresize = () => {
    showhideMenuBackBtn();
};

profileEditIcon.onclick = () => Toggler.togglePopup(DOM.editProfilepopup);
cancleProfilePopupBtn.onclick = () => Toggler.togglePopup(DOM.editProfilepopup);
settingBtn.onclick = () => Toggler.togglePopup(DOM.editProfilepopup);
addPeopleIcon.onclick = () => Toggler.togglePopup(DOM.addNewContactPopup);
newContactCloseButton.onclick = () =>
    Toggler.togglePopup(DOM.addNewContactPopup);
newContactAddButton.onclick = () => Toggler.togglePopup(DOM.addNewContactPopup);
chatTypeToggleBtn.onclick = () => {
    const chatType = localStorage.getItem("chat_type");
    toggleChatType({ toggle: chatType, messages: null });
};
