function setFromArray(array) {
    if (!Array.isArray(array)) {
        throw new Error('Invalid argument: Expected an array');
    }

    return new Set(array);
}

export default setFromArray;