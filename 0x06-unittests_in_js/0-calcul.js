module.exports = function calculateNumber(a, b = 0) {
    const aNumber = Number(a);
    const bNumber = Number(b);

    if (Number.isNaN(aNumber) || Number.isNaN(bNumber))
        throw TypeError('Parameters must be numbers');

        return Math.round(aNumber) + Math.round(bNumber);
    };