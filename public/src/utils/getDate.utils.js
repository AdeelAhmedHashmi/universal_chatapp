function getDate(type) {
    const date = new Date();

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth()).padStart(2, "0");
    const year = String(date.getFullYear()).padStart(2, "0");

    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");

    if (type === "full") return `${day}/${month}/${year} - ${hour}:${minute}`;
    else if (type === "date") return `${day}/${month}/${year}`;
    else if (type === "time") return `${hour}:${minute}`;
}

export default getDate;
