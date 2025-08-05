import vars from "../constants/variables.js";

function setProfileOnLocalStorage(user) {
    vars.clientInfo.name = user.username;
    vars.clientInfo.clientId = user.chatId;

    if (!user.avatar) {
        user.avatar = "./src/asserts/profile.png";
    }
    const profile = {
        username: user.username,
        chatId: user.chatId,
        avatar: user.avatar,
    };

    const parsedProfile = JSON.stringify(profile);
    localStorage.setItem("user_profile", parsedProfile);
}

export default setProfileOnLocalStorage;
