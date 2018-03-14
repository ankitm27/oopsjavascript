class SimpleDate {
    static setDefaultDate(year, month, day) {
        SimpleDate._defaultDate = new SimpleDate(year, month, day);
    }
    constructor(year, month, day) {
        if (arguments.length === 0) {
            this._year = SimpleDate._defaultDate._year;
            this._month = SimpleDate._defaultDate._month;
            this._day = SimpleDate._defaultDate._day;
            return;
        }
        this._year = year;
        this._month = month;
        this._day = day;
    }
    addDays(nDays) {
        this._day = this._day + nDays;
    }
    getDay() {
        return this._day;
    }
}
SimpleDate.setDefaultDate(1970, 1, 1);
let defaultDate = new SimpleDate();
defaultDate.addDays(1);
console.log(defaultDate.getDay());