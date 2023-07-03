import Car from './10-car.js';

export default class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(brand, motor, color);
        this._range = range;
    }

    // Getter for the range
    get range() {
        return this._range;
    }

    // Clone car object
    cloneCar() {
        const { _brand, _motor, _color } = this;
        const clonedCar = new Car(_brand, _motor, _color);
        return clonedCar;
    }
}