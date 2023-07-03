export default class Building{
    constructor(sqft) {
        this._sqft = typeof sqft === 'number' ? sqft : 0;
    }

    // Getter for the sqft
    get sqft() {
        return this._sqft;
    }

    // Setter for the sqft
    set sqft(value) {
        if (typeof value === 'number') {
            this._sqft = value;
        } else {
            throw new Error('TypeError: Square footage must be a number');
        }
    }

    // Abstract method
    evacuationWarningMessage() {
        throw new Error(
            'Class extending Building must override evacuationWarningMessage'
        );
    }
}