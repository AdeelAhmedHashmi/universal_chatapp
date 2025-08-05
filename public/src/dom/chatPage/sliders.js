import DOM from "../../constants/indexDom.js";

const {
    listIcon,
    leftMenuBackIcon,
    leftMenuBar,
    profileIcon,
    rightMenuBar,
    rightMenuBackIcon,
} = DOM;

function sliders() {
    listIcon.onclick = () => {
        if (getComputedStyle(leftMenuBar).position === "absolute") {
            leftMenuBar.style.transform = "translate(0%)";
        }
    };
    leftMenuBackIcon.onclick = () => {
        if (getComputedStyle(leftMenuBar).position === "absolute") {
            leftMenuBar.style.transform = "translate(-100%)";
        }
    };
    rightMenuBackIcon.onclick = () => {
        if (getComputedStyle(leftMenuBar).position === "absolute") {
            rightMenuBar.style.transform = "translate(-100%)";
        }
    };
    profileIcon.onclick = () => {
        if (getComputedStyle(rightMenuBar).position === "absolute") {
            rightMenuBar.style.transform = "translate(0%)";
        }
    };
}
export default sliders;
