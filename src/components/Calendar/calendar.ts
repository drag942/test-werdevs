const DAYS_IN_WEEK:number = 7;

const DAYS_IN_MONTH:number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const WEEK_DAYS_FROM_MONDAY:number[] = [6, 0, 1, 2, 3, 4, 5];

const Month = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11
};



export const areEqual = (a:Date, b:Date):Boolean => {
    if (!a || !b) return false;

    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

export const isLeapYear = (year:number):Boolean => {
    return !((year % 4) || (!(year % 100) && (year % 400)));
};

export const getDaysInMonth = (date:Date):number => {
    const month:number = date.getMonth();
    const year:number = date.getFullYear();
    const daysInMonth:number = DAYS_IN_MONTH[month];

    if (isLeapYear(year) && month === Month.February) {
        return daysInMonth + 1;
    } else {
        return daysInMonth;
    }
};

export const getDayOfWeek = (date:Date):number => {
    const dayOfWeek:number = date.getDay();

    return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
};

export  const getMonthData = (year:number, month:number):{date: Date, isDisabled: Boolean}   [][] => {
    const result:{date: Date, isDisabled: Boolean} [][] = [];
    const date:Date = new Date(year, month);
    const daysInMonth:number = getDaysInMonth(date);
    const monthStartsOn:number = getDayOfWeek(date);
    let day:number = 1;

    for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
        result[i] = [];

        for (let j = 0; j < DAYS_IN_WEEK; j++) {
            if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
                if(day > daysInMonth) {
                    const nextMonth = ++month;
                    const nextDay = day++ - daysInMonth;
                        result[i][j] = {
                            date: new Date(year, nextMonth, nextDay),
                            isDisabled: true,
                        };
                }
                if ((i === 0 && j < monthStartsOn)) {
                    result[i][j] = {
                        date: new Date(year, month, (j - monthStartsOn) + 1),
                        isDisabled: true,
                    };
                }
            } else {
                result[i][j] = {
                    date: new Date(year, month, day++),
                    isDisabled: false,
                };
            }
        }
    }

    return result;
};