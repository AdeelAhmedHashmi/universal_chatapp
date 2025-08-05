function formValidation(form) {
    const formData = new FormData(form);
    console.log(form);
    for (let [key, value] of formData.entries()) {
        console.log(key, value);
        if (key === "username") {
            if (value.length > 3) {
                return true;
            }
        }
    }
    return false;
}

export default formValidation;
