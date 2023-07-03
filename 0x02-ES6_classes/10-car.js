export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    // Getter for the brand
    get brand() {
        return this._brand;
    }

    // Getter for the motor
    get motor() {
        return this._motor;
    }

    // Getter for the color
    get color() {
        return this._color;
    }

    // Clone car instance
    cloneCar() {
        const symbol = Symbol('clone');
        const clonedCar = new Car(this._brand, this._motor, this._color);
        Object.defineProperty(clonedCar, symbol, { value: true });
        return clonedCar;
    }

    // Check if the car is cloned
    static isClonedCar(car) {
        const symbol = Symbol('clone');
        return car[symbol] === true;
    }
}