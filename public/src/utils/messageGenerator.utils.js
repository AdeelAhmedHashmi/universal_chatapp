import getDate from "./getDate.utils.js";

function message(type, from, to, chatid, message) {
    return JSON.stringify({
        type,
        from,
        to,
        chatid,
        message,
        date: getDate("full"),
    });
}

export default message;
