import chatIdValidator from "./chatIdValidator.utils.js";

function isPasswordValid(password) {
    const passArr = password.split("");
    if (passArr.length < 8)
        return { isValid: false, err: "password is too short!" };

    const filteredPassword = passArr.map((char) => Number(char));
    for (let i = 0; i < filteredPassword.length; i++) {
        const char = filteredPassword[i];
        if (!isNaN(char)) return { isValid: true, err: null };
    }

    return {
        isValid: false,
        err: "password must contains letters, numbers and special characters",
    };
}

const formValidation = (username, chatId, password) => {
    let validation = {
        username: false,
        chatId: false,
        password: false,
    };

    const ischatidvalid = chatIdValidator(chatId);
    const ispasswordvalid = isPasswordValid(password.trim());
    const passwordErr = ispasswordvalid.err;
    const chatIdErr = ischatidvalid.err;

    if (username.trim().length > 3) {
        validation.username = true;
    }

    if (ischatidvalid.isValid) {
        validation.chatId = true;
    }

    if (ispasswordvalid.isValid) {
        validation.password = true;
    }

    if (validation.password && validation.chatId && validation.username) {
        return true;
    } else {
        return {
            passwordErr,
            chatIdErr,
        };
    }
};

export default formValidation;
