import DOM from "../constants/indexDom";
import vars from "../constants/variables";
import loading from "../dom/chatPage/showLoading";
import showLog from "../dom/chatPage/showlog.js";
import Render from "./renderer.utils.js";

const { listContainer } = DOM;

async function sendRequest(contactId) {
    const response = await fetch(vars.serverUrls.deleteContact, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            contact: contactId,
        }),
    });

    const res = response.json();

    if (response.status === 200) {
        return {
            status: true,
            data: res.data,
        };
    } else {
        return {
            status: false,
            data: "Some thing went wrong, Contact not deleted!",
        };
    }
}

async function deleteContact(e) {
    if (e.target.id === "trash") {
        const contactId =
            e.target.parentNode.querySelector(".chatid").textContent;

        loading("open", "contact deleting...");
        const res = await sendRequest(contactId);
        loading("close");
        if (res.status) {
            showLog("Successfull!", "contact deleted successfully!");
            Render.oneItem("delete", e.target.parentNode);
        } else {
            showLog("Error: ", "Some thing went wrong, Contact not deleted!");
        }
    }
}

listContainer.addEventListener("click", deleteContact);
