import DOM from "../../constants/indexDom.js";
const { searchInput, searchIcon, listContainer } = DOM;

const listItems = Array.from(listContainer.querySelectorAll(".item"));

function search(query) {
    for (let i = 0; i < listItems.length; i++) {
        const item = listItems[i];
        const username = item.querySelector(".username").innerText.trim();
        const chatid = item.querySelector(".chatid").innerText.trim();

        if (username.includes(query) || chatid.includes(query)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
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
