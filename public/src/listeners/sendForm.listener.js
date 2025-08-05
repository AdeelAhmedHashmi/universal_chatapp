import vars from "../constants/variables.js";

async function sendData(formData) {
    const response = await fetch(vars.serverUrls.updateProfile, {
        method: "POST",
        credentials: "include",
        body: formData,
    });

    const result = await response.json();
    return {
        status: response.status,
        data: result,
    };
}

async function sendUpdateProfileForm(form) {
    const formData = new FormData(form);
    for (let [key, value] of formData.entries()) {
        console.log(key);
        if (key === "profilePic") {
            if (value.name.length < 1) {
                formData.delete("profilePic");
            }
        }
    }

    const response = await sendData(formData);
    if (response.status === 200) {
        return {
            message: response.data.message,
            color: "green",
        };
    } else if (response.status === 401) {
        return {
            message: response.data.message,
            color: "red",
        };
    } else if (response.status === 400) {
        return {
            message: response.data.message,
            color: "red",
        };
    } else if (response.status === 500) {
        return {
            message: response.data.message,
            color: "red",
        };
    }
}

export default sendUpdateProfileForm;
