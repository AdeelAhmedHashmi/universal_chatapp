import DOM from "./constants/registerDom.js";
import vars from "./constants/variables.js";
import { generateId } from "./utils/generateChatId.utils.js";
import formValidation from "./utils/registerationValidation.utils.js";

const {
    usernameInputField,
    chatIdInputField,
    passwordInputField,
    registerBtn,
    errBox,
    noteBox,
} = DOM;

chatIdInputField.value = generateId();

async function sendRegisterationForm(username, chatId, password) {
    try {
        const response = await fetch(vars.serverUrls.register, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                chatId,
                password,
            }),
        });

        const status = response.status;
        const data = await response.json();
        return {
            status,
            data,
        };
    } catch (err) {
        return false;
    }
}

registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    noteBox.classList.add("hide");

    const isValid = formValidation(
        usernameInputField.value,
        chatIdInputField.value,
        passwordInputField.value
    );
    if (isValid === true) {
        const response = sendRegisterationForm(
            usernameInputField.value,
            chatIdInputField.value,
            passwordInputField.value
        );
        if (response) {
            response.then((res) => {
                if (res.status === 201) {
                    localStorage.setItem("redirect_url", "./login.html");

                    setTimeout(() => {
                        window.location.href = "./redirect.html";
                    }, 1000);
                } else if (res.status === 400) {
                    errBox.innerText = `${res.data.message}`;
                } else {
                    console.log("err");
                }
            });
        } else {
            errBox.innerText = `Something went wrong!`;
        }
    } else {
        const { passwordErr, chatIdErr } = isValid;
        errBox.innerText = `${passwordErr ? passwordErr : ""} \n ${
            chatIdErr ? chatIdErr : ""
        }`;
    }
});
