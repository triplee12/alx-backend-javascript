export default class HolbertonCourse {
    constructor(name, length, students) {
        this._name = typeof name === 'string' ? name : '';
        this._length = typeof length === 'number' ? length : 0;
        this._students = Array.isArray(students) ? students : [];
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

    // Getter for length
    get length() {
        return this._length;
    }

    // Setter for length
    set length(value) {
        if (typeof value === 'number') {
            this._length = value;
        } else {
            throw new TypeError('TypeError: Length must be a number.');
        }
    }

    // Getter for students
    get students() {
        return this._students;
    }

    // Setter for students
    set students(value) {
        if (Array.isArray(value)) {
            this._students = value;
        } else {
            throw new TypeError('TypeError: Students must be an array.');
        }
    }
}