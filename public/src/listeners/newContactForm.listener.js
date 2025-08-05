function sendData() {}

function sendNewContactForm(form) {
    const formData = new FormData(form);

    for (let [key, value] of formData.entries()) {
        console.log(key, value);
    }
}

export default sendNewContactForm();
