import DOM from "../../constants/indexDom.js";

const { settingFileInputField, settingProfileImg } = DOM;
function filePreviewer() {
    settingFileInputField.addEventListener("change", (e) => {
        const file = e.target.files[0];
        const fileUrl = URL.createObjectURL(file);
        console.log(settingProfileImg);
        settingProfileImg.src = fileUrl;
    });
}

export default filePreviewer;
