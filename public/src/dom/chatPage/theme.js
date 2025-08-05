import DOM from "../../constants/indexDom.js";
import _Toggler from "./toggle.js";

const Toggler = new _Toggler();
class Theme {
    constructor() {
        this.themeToggleBtn = DOM.themeToggleBtn;
        this.theme = localStorage.getItem("theme");
        if (this.theme === "black") {
            this.themeToggleBtn.checked = true;
        }
        if (!this.theme) {
            localStorage.setItem("theme", "black");
            this.theme = localStorage.getItem("theme");
            this.themeToggleBtn.checked = true;
        }
        this.changeTheme(this.theme === "black");

        this.themeToggleBtn.addEventListener("change", () => {
            this.changeTheme(this.themeToggleBtn.checked);
        });
    }

    changeTheme(isDark) {
        localStorage.setItem("theme", isDark === true ? "black" : "white");
        Toggler.toggleTheme(isDark);
    }
}

export default Theme;
