// key: YYYY-MM-DD
// value: prompt
const prompts: { [key: string]: string; }  = {
    '2021-06-01': 'Sun',
    '2021-06-02': 'Water',
    '2021-06-03': 'Leaf',
    '2021-06-04': 'Sky',
    '2021-06-05': 'Flower',
    '2021-06-06': 'Fire',
    '2021-06-07': 'Wind',

    '2021-07-01': 'Mirror',
    '2021-07-02': 'Flow',
    '2021-07-03': 'Repeat',
    '2021-07-04': 'Combine',
    '2021-07-05': 'Rotate',
    '2021-07-06': 'Distort',
    '2021-07-07': 'Divide'
};

/**
 * key is the month in format 'YYYY-MM'
 * value is the theme for the month
 */
const themes: { [key: string]: string; }  = {
    '2021-06': 'Nature',
    '2021-07': 'Transformations'
}

function getLocalYearMonthDate(d: Date) {
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }

    if (day.length < 2) {
        day = '0' + day;
    }

    return [year, month, day].join('-');
}

export function getPromptForDate(date: Date) {
    const key = getLocalYearMonthDate(date);
    return prompts[key] ?? '...';
}

export function getThemeForDate(date: Date) {
    const key = getLocalYearMonthDate(date).substr(0, 7);
    return themes[key] ?? '...';
}