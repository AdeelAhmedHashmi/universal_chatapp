import loading from "../dom/chatPage/showLoading.js";
import showlog from "../dom/chatPage/showlog.js";
import formValidation from "../utils/profileFormValidation.utils.js";
import sendUpdateProfileForm from "../listeners/sendForm.listener.js";
import DOM from "../constants/indexDom.js";
import _Toggler from "../dom/chatPage/toggle.js";

const Toggler = new _Toggler();

const { updateForm } = DOM; // profile update form
const updateProfile = async (e) => {
    e.preventDefault();
    const validation = formValidation(updateForm);
    if (!validation) {
        showlog(
            "Validation Err: ",
            "Username must be greaterthen 3 characters!",
            "red"
        );
        return;
    } else {
        loading("open", "server responding...");
        const response = await sendUpdateProfileForm(updateForm);

        loading("close");

        Toggler.togglePopup(DOM.editProfilepopup);
        showlog(
            response.color === "green" ? "Successfull!" : "Error: ",
            response.message,
            response.color
        );
    }
};

export default updateProfile;
