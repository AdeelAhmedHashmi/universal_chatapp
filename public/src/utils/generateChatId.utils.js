function getNum(range) {
    return Math.floor(Math.random() * (range + 1));
}
const generateId = () => {
    const id = `${getNum(10)}${getNum(10)}${getNum(10)}${getNum(10)}-${getNum(
        10
    )}${getNum(10)}${getNum(10)}${getNum(10)}-${getNum(10)}${getNum(
        10
    )}${getNum(10)}${getNum(10)}`;

    const idArr = id.split("-");
    for (let i = 0; i < idArr.length; i++) {
        const idPart = idArr[i];
        const idLength = idPart.length;
        const requiredLength = 4;
        const cuts = idLength - requiredLength;

        if (cuts !== 0) {
            idArr[i] = idPart.slice(cuts);
        }
    }

    return idArr.join("-");
};

export { generateId, getNum };
