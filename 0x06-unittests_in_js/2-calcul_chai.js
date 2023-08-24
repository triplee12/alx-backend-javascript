function calculateNumber(type, a, b) {
    const aNum = Number(a);
    const bNum = Number(b);

    if (Number.isNaN(aNum) || Number.isNaN(bNum)) {
        throw TypeError;
    }
    
    if (type === 'SUM') {
        return (Math.round(aNum) + Math.round(bNum));
    } else if(type === 'SUBTRACT') {
        return (Math.round(aNum) - Math.round(bNum));
    } else if (type === 'DIVIDE') {
        if (Math.round(bNum) === 0) {
            return ('Error');
        }
        return (Math.round(aNum) / Math.round(bNum));
    } else {
        throw TypeError;
    }
}
module.exports = calculateNumber;