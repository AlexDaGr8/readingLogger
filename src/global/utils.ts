import { getCurrentInstance, reactive } from 'vue';

export interface todo {
    id: string;
    name: string;
    done: boolean;
    dueDate: Date;
}

export interface month {
    id: number;
    name: string;
    days: Date[];
}

export interface year {
    name: number;
    months: month[];
}

export interface time {
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export function timeLeft(endDate: Date): string {
    const startDate: Date = new Date();
    const dateDiff: number = endDate.getTime() - startDate.getTime();  
    const oneMonth: number = 1000*60*60*24*30;
    const _month: number = dateDiff/oneMonth;
    const _d: number = (_month % 1) * 30;
    const _h: number = (_d % 1) * 24;
    const _m: number = (_h % 1) * 60;
    const _s: number = (_m % 1) * 60;
    const diff: time = {
        months: Math.round(_month),
        days: Math.round(_d),
        hours: Math.floor(_h),
        minutes: Math.floor(_m),
        seconds: Math.floor(_s),
    };
    let resultStr: string = '';
    if (diff.months > 0) {
        resultStr = `${diff.months} month${diff.months > 1 ? 's' : ''} from today`;
    } else if (diff.days > 0) {
        resultStr = `${diff.days} day${diff.days > 1 ? 's' : ''} from today`;
    } else if (diff.hours > 0) {
        resultStr = `${diff.hours} hours from now`;
    } else if (diff.minutes > 0) {
        resultStr = `${diff.minutes} minutes from now`;
    } else {
        resultStr = `past due`;
    }
    return resultStr;
}

export function getMonthName(monthNumber: number): string {
    const months: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    return months[monthNumber];
}

export const yearComp = () => {
    const years: year[] = reactive<year[]>([
        {
            name: 2020,
            months: [] as month[]
        },
        {
            name: 2021,
            months: [] as month[]
        },
        {
            name: 2022,
            months: [] as month[]
        }
    ]);
    const getYearId = (id: number) => {
        return years.findIndex((y: year) => y.name === id);
    }
    const yearItem = (id: number) => {
        return years[getYearId(id)];
    }
    const getYears = (): void => {
        const yearIds: number[] = Array.from(Array(400).keys()).map(k => k + 1800);
        const monthIds: number[] = Array.from(Array(12).keys());
        for (let yearId of yearIds) {
            let findYear = years.find((y: year) => y.name === yearId);
            let months: month[] = [];
            for (let monthId of monthIds) {
                let days = getDaysOfMonth(yearId, monthId);
                months.push({
                    id: monthId,
                    name: getMonthName(monthId),
                    days: days
                })
            }
            if (findYear) {
                findYear.months = months;
            } else {
                const year: year = {
                    name: yearId,
                    months: months
                };
                years.push(year);
            }
        }

        function getDaysOfMonth(year: number, month: number) {
            var date = new Date(year, month, 1);
            var days = [];
            while (date.getMonth() === month) {
                days.push(new Date(date));
                date.setDate(date.getDate() + 1);
            }
            return days;
        }
    }
    
    getYears();

    const test = 'hi';

    return {
        getYearId,
        yearItem,
        test,
        years,
        getMonthName
    }
}