import vars from "../constants/variables.js";

async function getContacts() {
    const res = await fetch(vars.serverUrls.numbers, {
        method: "GET",
        credentials: "include",
        headers: {
            Accept: "application/json",
        },
    });

    const response = await res.json();
    if (res.status === 200) {
        localStorage.setItem("user_contacts", JSON.stringify(response.data));
    }
}

export default getContacts;
