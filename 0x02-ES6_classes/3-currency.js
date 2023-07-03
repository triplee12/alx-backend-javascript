export default class Currency{
    constructor(code, name) {
        this._code = typeof code === 'string' ? code : '';
        this._name = typeof name === 'string' ? name : '';
    }

    // Getter for code
    get code() {
        return this._code;
    }

    // Setter for code
    set code(value) {
        if (typeof value === 'string') {
            this._code = value;
        } else {
            throw new TypeError('TypeError: Code must be a string.');
        }
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(value) {
        if (typeof value === 'string') {
            this._name = value;
        } else {
            throw new TypeError('TypeError: Name must be a string.');
        }
    }

    // Method to display the full currency
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}