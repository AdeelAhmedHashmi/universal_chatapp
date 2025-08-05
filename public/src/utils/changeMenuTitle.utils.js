import DOM from "../constants/indexDom.js";
const { menuTitle } = DOM;

function setMenuTitle() {
    if (localStorage.getItem("chatType") === "group") {
        menuTitle.textContent = "Joined People";
    } else {
        menuTitle.textContent = "Other People";
    }
}

export default setMenuTitle;
