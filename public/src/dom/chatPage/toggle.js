import DOM from "../../constants/indexDom.js";

class _Toggler {
    togglePopup(element) {
        if (element.classList.contains("hide")) {
            element.classList.remove("hide");
        } else {
            element.classList.add("hide");
        }
    }
    toggleTheme(isDark) {
        if (isDark) {
            document.body.classList.remove("light-theme");
        } else {
            document.body.classList.add("light-theme");
        }
    }
    toggleNewContactPopup() {}
}

export default _Toggler;
