"use strict"

// Փորձել եմ ստեղծել ֆունկցիա, որը կնմանակի new Date() մեթոդը


function MyDate(year, month, date, hours, minutes, seconds, milliseconds) {
    let forDate
    this.year = 0;
    this.month = 0;
    this.date = 1
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0
    this.day = 0

    if (!year) {
        return new Date()
    }
    else if (!month) {
        this.year = 1970;
        this.month = 0;
        this.date = 1
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.milliseconds += year
        this.day
    }
    else {
        this.year = year;
        this.month = month;
        this.date = date;
        if (!date) {
            this.date = 1
        };
        this.hours = hours;
        if (!hours) {
            this.hours = 0
        };
        this.minutes = minutes;
        if (!minutes) {
            this.minutes = 0
        };
        this.seconds = seconds;
        if (!seconds) {
            this.seconds = 0
        };
        this.milliseconds = milliseconds;
        if (!milliseconds) {
            this.milliseconds = 0
        };
        this.day = this.date
    };

    this.setFullYear = function (val) {
        this.year = val
        this.setThisMs();
        this.setThisSeconds();
        this.setThisMinutes();
        this.setThisHours();
        this.setThisDate();
        this.setThisMonth();
        return this.year
    };
    this.setMonth = function (val) {
        this.month = val;
        this.setThisMs();
        this.setThisSeconds();
        this.setThisMinutes();
        this.setThisHours();
        this.setThisDate();
        this.setThisMonth();
        return this.month
    };


    this.setDate = function (val) {
        this.date = val;
        this.setThisMs();
        this.setThisSeconds();
        this.setThisMinutes();
        this.setThisHours();
        this.setThisDate()
        this.day += val - 1
        return this.date
    };


    this.setHours = function (val) {
        this.hours = val;
        this.setThisMs();
        this.setThisSeconds();
        this.setThisMinutes();
        this.setThisHours();
        return this.hours
    };


    this.setMinutes = function (val) {
        this.minutes = val;
        this.setThisMs();
        this.setThisSeconds();
        this.setThisMinutes();
        this.setThisHours();
        return this.minutes
    }
    this.setSeconds = function (val) {
        this.seconds = val;
        this.setThisMs();
        this.setThisSeconds();
        this.setThisMinutes();
        this.setThisHours();
        return this.seconds
    }
    this.setMilliseconds = function (val) {
        this.milliseconds = val;
        this.setThisMs();
        this.setThisSeconds();
        this.setThisMinutes();
        this.setThisHours();
        this.setThisDate();
        this.setMonth();
        this.setThisDay()
        return this.milliseconds
    };


    this.setThisMs = function () {
        while (this.milliseconds > 999) {
            this.seconds += 1,
                this.milliseconds -= 1000
        } return this.milliseconds
    };

    this.setThisSeconds = function () {
        while (this.seconds >= 60) {
            this.minutes += 1;
            this.seconds -= 60
        } return this.seconds
    };

    this.setThisMinutes = function () {
        while (this.minutes > 59) {
            this.hours += 1;
            this.minutes -= 60
        } return this.minutes
    };

    this.setThisHours = function () {
        while (this.hours >= 24) {
            this.date += 1;
            //this.day = 0
            this.day += 1
            this.hours -= 24;
        } return this.hours
    };

    this.setThisDate = function () {
        while (this.date > 31) {
            this.month += 1;
            this.date -= 31;
            this.day = this.date;
            this.setThisDay()
        } return this.date
    };

    this.setThisMonth = function () {
        while (this.month > 11) {
            this.year += 1;
            this.month -= 12
        } return this.month
    };

    this.setThisDay = function () {
        while (this.day >= 7) {
            this.day -= 7
        } return this.day
    }

    this.getFullYear = function () {
        this.setThisMs();
        this.setThisSeconds();
        this.setThisMinutes();
        this.setThisHours();
        this.setThisDate();
        this.setThisMonth();
        return this.year
    }
    this.getMonth = function () {
        this.setThisMs();
        this.setThisSeconds();
        this.setThisMinutes();
        this.setThisHours();
        this.setThisDate();
        this.setThisMonth();
        return this.month
    };
    this.getDate = function () {
        this.setThisMs();
        this.setThisSeconds();
        this.setThisMinutes();
        this.setThisHours();
        this.setThisMonth();
        this.setThisDate();
        return this.date
    };
    this.getHours = function () {
        this.setThisMs();
        this.setThisSeconds();
        this.setThisMinutes();
        this.setThisHours();
        this.setThisDate();
        this.setThisMonth();
        return this.hours
    };
    this.getMinutes = function () {
        this.setThisMs();
        this.setThisSeconds();
        this.setThisMinutes();
        this.setThisHours();
        this.setThisDate();
        this.setThisMonth();
        return this.minutes
    };
    this.getSeconds = function () {
        this.setThisMs();
        this.setThisSeconds();
        this.setThisMinutes();
        this.setThisHours();
        this.setThisDate();
        this.setThisMonth();
        return this.seconds
    };
    this.getMilliseconds = function () {
        this.setThisMonth();
        this.setThisDate();
        this.setThisHours();
        this.setThisMinutes();
        this.setThisSeconds();
        this.setThisMs();
        return this.milliseconds
    };
    this.getDay = function () {
        this.setThisMonth();
        this.setThisDate();
        this.setThisHours();
        this.setThisMinutes();
        this.setThisSeconds();
        this.setThisMs();
        this.setThisDay()
        return this.day
    };

    this.getTime = function () {
        return (this.year * 365 * 24 * 60 * 60 * 1000) + (this.month * 31 * 24 * 60 * 60 * 1000) + (this.date * 24 * 60 * 60 * 1000) + (this.hours * 60 * 60 * 1000) + (this.minutes * 60 * 1000) + (this.seconds * 1000) + (this.milliseconds)
    }

    this.getMe = function () {
        switch (this.getDay()) {
            case 0:
                this.day = "Monday";
                break;
            case 1:
                this.day = "Tuesday";
                break;
            case 2:
                this.day = "Wednesday";
                break;
            case 3:
                this.day = "Thursday";
                break;
            case 4:
                this.day = "Friday";
                break;
            case 5:
                this.day = "Saturday";
                break;
            case 6:
                this.day = "Sunday";
                break;
        };
        switch (this.getMonth()) {
            case 0:
                this.month = "Jan.";
                break;
            case 1:
                this.month = "Feb.";
                break;
            case 2:
                this.month = "March";
                break;
            case 3:
                this.month = "April";
                break;
            case 4:
                this.month = " May";
                break;
            case 5:
                this.month = "June";
                break;
            case 6:
                this.month = "July";
                break;
            case 7:
                this.month = "Aug.";
                break;
            case 8:
                this.month = "Sept.";
                break;
            case 9:
                this.month = "Oct.";
                break;
            case 10:
                this.month = "Nov.";
                break;
            case 11:
                this.month = "Dect.";
                break;
        };
        if (this.date < 10) {
            this.date = "0" + this.date
        };
        if (this.hours < 10) {
            this.hours = "0" + this.hours
        };
        if (this.minutes < 10) {
            this.minutes = "0" + this.minutes
        };
        if (this.seconds < 10) {
            this.seconds = "0" + this.seconds
        };

        return this.getDay() + " " + this.getFullYear() + " " + this.getMonth() + " " + this.getDate() + "   " + this.getHours() + " : " + this.getMinutes() + " : " + this.getSeconds() + "   GMT 00.00  (Greenwich time)"
    };
};


let h = new MyDate(2023);

console.log(h.getMe());



























