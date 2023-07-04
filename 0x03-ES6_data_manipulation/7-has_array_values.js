function hasValuesFromArray(set, array) {
    if (!(set instanceof Set) || !Array.isArray(array)) {
        throw new Error('Invalid arguments: Expected a Set and an Array');
    }

    for (const element of array) {
        if (!set.has(element)) {
            return false;
        }
    }

    return true;
}

export default hasValuesFromArray;