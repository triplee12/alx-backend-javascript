import Currency from "./3-currency";

export default class Pricing{
    constructor(amount, currency) {
        this._amount = typeof amount === "number" ? amount : 0;
        if (currency instanceof Currency) {
            this._currency = currency;
        } else {
            throw new TypeError(
                'TypeError: Currency must be an instance of Currency class.'
            );
        }
    }

    // Getter for the amount
    get amount() {
        return this._amount;
    }

    // Setter for the amount
    set amount(value) {
        if (typeof value === 'string') {
            this._amount = value;
        }else {
            throw new TypeError('TypeError: Amount must be a number.');
        }
    }

    // Getter for the currency
    get currency() {
        return this._currency;
    }

    // Setter for the currency
    set currency(value) {
        if (value instanceof Currency) {
            this._currency = value;
        } else {
            throw new TypeError(
                'TypeError: Currency must be an instance of Currency class.'
            );
        }
    }

    // Display the full price
    displayFullPrice() {
        const { amount, currency } = this;
        return `${amount} ${currency.name} (${currency.code})`;
    }

    // Convert currency
    static convertPrice(amount, conversionRate) {
        if (typeof amount === 'number' && typeof conversionRate === 'number') {
            return amount * conversionRate;
        } else {
            throw new TypeError('TypeError: Amount and conversionRate must be numbers.');
        }
    }
}