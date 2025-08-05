import DOM from "../../constants/indexDom.js";

const { loadingBox } = DOM;

function loading(state, content = null) {
    loadingBox.textContent = content;
    if (state === "open") {
        loadingBox.classList.remove("hide");
    } else {
        loadingBox.classList.add("hide");
    }
}

export default loading;
