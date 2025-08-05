import DOM from "../../constants/indexDom.js";
import { emojis } from "../../constants/emojis.js";

const { emojiBox, emojiSearchBar, inputField } = DOM;

class _Emoji {
    constructor() {
        this.renderEmoji();
        this.useEmoji();
        this.searchEmoji();
    }
    async renderEmoji() {
        for (let emoji of emojis) {
            const box = document.createElement("div");
            box.textContent = emoji.emoji;
            box.id = "emoji";
            box.className = emoji.tags;
            emojiBox.appendChild(box);
        }
    }
    useEmoji() {
        emojiBox.addEventListener("click", (e) => {
            const target = e.target;
            if (target.id === "emoji") {
                const emoji = target.innerText;
                inputField.value += emoji;
                inputField.focus();
            }
        });
    }
    searchEmoji() {
        inputField.addEventListener("input", (e) => {
            const value = e.target.value;
            const valueLength = value.length;
            if (value.trim().length < 1) {
                return;
            }

            const queryArray = value.split(" ");
            const lastWord = queryArray[queryArray.length - 1];
            this.findEmoji(lastWord);
        });
        emojiSearchBar.addEventListener("input", (e) => {
            this.findEmoji(e.target.value.trim());
        });
    }
    findEmoji(query) {
        const emojis = Array.from(
            document.querySelectorAll(".emojiBox #emoji")
        );
        for (let i = 0; i < emojis.length; i++) {
            const tags = emojis[i].className;
            if (tags.includes(query)) {
                emojis[i].style.display = "flex";
            } else {
                emojis[i].style.display = "none";
            }
        }
    }
}

const Emoji = new _Emoji();
export default Emoji;
