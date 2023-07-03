import Building from "./5-building";

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        this._floors = typeof floors === "number" ? floors : 0;
    }

    // Getter for the floors
    get floors() {
        return this._floors;
    }

    // Setter for the floors
    set floors(value) {
        if (typeof value === 'number') {
            this._floors = value;
        } else {
            throw new TypeError('TypeError: Number of floors must be a number.');
        }
    }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors.`;
    }
}