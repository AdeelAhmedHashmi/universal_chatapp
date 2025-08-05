import DOM from "../../constants/indexDom.js";

const { errorBox } = DOM;

function showError(title, content, color) {
    errorBox.style.backgroundColor = color;
    errorBox.querySelector(".title").innerText = title;
    errorBox.querySelector(".content").innerText = content;
    errorBox.classList.remove("hide");
    setTimeout(() => {
        errorBox.classList.add("hide");
    }, 2000);
}
export default showError;
