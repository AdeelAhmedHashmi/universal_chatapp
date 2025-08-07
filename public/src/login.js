import vars from "./constants/variables.js";
import DOM from "./constants/loginDom.js";

const { loginBtn, chatIdInputField, passwordInputField, errBox } = DOM;
async function sendLoginCredentials(chatId, password) {
    try {
        const response = await fetch(vars.serverUrls.login, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chatId,
                password,
            }),
        });
        const data = response.json();
        const status = response.status;

        return { status, data };
    } catch (err) {
        return false;
    }
}

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const chatId = chatIdInputField.value.trim();
    const password = passwordInputField.value.trim();

    if (!chatId || !password) {
        errBox.innerText = "Enter valid chatId and password!";
        return;
    }

    if (chatId.length !== 14 || password.length < 4) {
        errBox.innerText = "Enter valid chatId and password!";
        return;
    }

    errBox.innerText = "";

    const response = sendLoginCredentials(chatId, password);

    if (!response) {
        errBox.innerText = "Invalid Credential!";
        return;
    }

    response.then((response) => {
        if (response.status === 200) {
            localStorage.setItem("redirect_url", "./chat.html");
            setTimeout(() => {
                window.location.href = "./redirect.html";
            }, 1000);
        }
    });
});
