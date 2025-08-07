import DOM from "../../constants/indexDom.js";
const { searchInput, searchIcon } = DOM;

function search(query) {
    const listItems = Array.from(document.querySelectorAll(".item"));

    for (let i = 0; i < listItems.length; i++) {
        const item = listItems[i];

        const username = item.querySelector(".username").innerText.trim();
        const chatid = item.querySelector(".chatid").innerText.trim();

        if (username.includes(query) || chatid.includes(query)) {
            item.style.display = "block";
            console.log("match: ", item);
        } else {
            item.style.display = "none";
            console.log("unmatch: ", item);
        }
    }
}

function searchFilter() {
    searchInput.addEventListener("input", (e) => {
        search(e.target.value.trim());
    });
    searchIcon.addEventListener("click", (e) => {
        if (searchInput) {
            search(searchInput.value.trim());
        }
    });
}

export default searchFilter;
