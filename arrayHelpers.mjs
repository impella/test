function addItemToArray(array, item) {
    let index = array.findIndex((element) => element.id === item.id);

    if (index === -1) array.push(item);
    else array.splice(index, 1, item);
}

function removeItemToArray(array, item) {
    let index = array.findIndex((element) => element.id === item.id);

    if (index !== -1) array.splice(index, 1);
}

export { addItemToArray, removeItemToArray };