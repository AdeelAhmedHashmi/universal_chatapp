import DOM from "../../constants/indexDom.js";

const {
    settingUsernameInputField,
    settingProfileImg,
    usernameBox,
    chatidBox,
    profileImg,
} = DOM;
function putUsernameAndChatid() {
    const userProfile = JSON.parse(localStorage.getItem("user_profile"));

    usernameBox.textContent = userProfile.username;
    chatidBox.textContent = userProfile.chatId;

    settingUsernameInputField.value = userProfile.username;
    if (userProfile.avatar) {
        settingProfileImg.src = userProfile.avatar;
        profileImg.src = userProfile.avatar;
    } else {
        settingProfileImg.src = "./src/asserts/profile.png";
        profileImg.src = "./src/asserts/profile.png";
    }
}

export default putUsernameAndChatid;
