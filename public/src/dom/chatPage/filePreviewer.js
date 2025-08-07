import DOM from "../../constants/indexDom.js";

const { settingFileInputField, settingProfileImg, profileImg } = DOM;
function filePreviewer() {
    settingFileInputField.addEventListener("change", (e) => {
        const file = e.target.files[0];
        const fileUrl = URL.createObjectURL(file);
        settingProfileImg.src = fileUrl;
        profileImg.src = fileUrl;
    });
}

export default filePreviewer;
