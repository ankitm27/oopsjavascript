//create normal variable in constructor and add method into constructor

class SimpleDate {
    constructor(year, month, day) {
        let _year = year;
        let _month = month;
        let _day = day;
        this.addDays = function(nDays) {
            _day = _day + 1;
        };
        this.getDay = function() {
            return _day;
        }
    }
}
let today = new SimpleDate(2018,3,15);
today.addDays(1);
console.log(today.getDay());

//privacy with symbols

let SimpleDate = (function() {
    let _yearKey = Symbol();
    let _monthKey = Symbol();
    let _dayKey = Symbol();
    class SimpleDate {
        constructor(year, month, day) {
            this[_yearKey] = year;
            this[_monthKey] = month;
            this[_dayKey] = day;
        }
        addDays(nDays) {
            this[_dayKey] = this[_dayKey] + nDays;
        }
        getDay() {
            return this[_dayKey];
        }
    }
    return SimpleDate;
}());
let today = new SimpleDate(2018,3,15);
today.addDays(1);
console.log(today.getDay());

