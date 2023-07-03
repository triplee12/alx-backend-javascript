export default class HolbertonClass {
    constructor(size, location) {
        this._size = typeof size === 'number' ? size : 0;
        this._location = typeof location === 'string' ? location : '';
    }

    // Getter for the size
    get size() {
        return this._size;
    }

    // Setter for the size
    set size(value) {
        if (typeof value === 'number') {
            this._size = value;
        } else {
            throw new TypeError('Invalid type. Size must be a number.');
        }
    }

    // Getter for the location
    get location() {
        return this._location;
    }

    // Setter for the location
    set location(value) {
        if (typeof value === 'string') {
            this._location = value;
        } else {
            throw new TypeError('Invalid type. Location must be a string.');
        }
    }

    // Primitive types
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return this._size;
        } else if (hint === 'string') {
            return this._location;
        } else {
            throw new TypeError(
                'Invalid hint. Conversion to primitive must be either "number" or "string".'
            );
        }
    }
}