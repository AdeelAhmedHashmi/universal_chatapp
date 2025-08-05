function chatIdValidator(id) {
    const chatid = id.trim();
    if (chatid.indexOf("-") === -1)
        return {
            isValid: false,
            err: "chatId must include '-' symbol every four numbers",
        };
    const chatidArr = chatid.split("-");

    for (let i = 0; i < chatidArr.length; i++) {
        const idPart = chatidArr[i];
        if (idPart.length !== 4 || isNaN(idPart))
            return {
                isValid: false,
                err: "chatId cannot contains characters use numbers",
            };
    }

    return { isValid: true, err: null };
}

export default chatIdValidator;
