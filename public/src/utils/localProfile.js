import vars from "../constants/variables.js";

function setProfileOnLocalStorage(user, messages) {
    vars.clientInfo.name = user.username;
    vars.clientInfo.clientId = user.chatId;

    if (!user.avatar) {
        user.avatar = "./src/asserts/profile.png";
    }

    if (messages) {
        localStorage.setItem("global_messages", JSON.stringify(messages));
    }
    const profile = {
        username: user.username,
        chatId: user.chatId,
        avatar: user.avatar,
        globalMessage: user.messages,
    };

    const parsedProfile = JSON.stringify(profile);
    localStorage.setItem("user_profile", parsedProfile);
}

export default setProfileOnLocalStorage;
