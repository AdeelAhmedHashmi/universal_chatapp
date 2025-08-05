import DOM from "../constants/indexDom.js";

const { container } = DOM;

const informUser = (data) => {
    const { from, date } = data;
    console.log("user joined: ", data);

    const infoBox = document.createElement("div");
    infoBox.className = "infoBox";
    infoBox.innerHTML = `<span>${from} join the chat | ${date}</span>`;
    container.appendChild(infoBox);
};

export default informUser;
