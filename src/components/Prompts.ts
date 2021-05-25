// key: YYYY-MM-DD
// value: prompt
const prompts: { [key: string]: string; }  = {
    '2021-06-01': 'Sun',
    '2021-06-02': 'Water',
    '2021-06-03': 'Leaf',
    '2021-06-04': 'Sky',
    '2021-06-05': 'Flower',
    '2021-06-06': 'Fire',
    '2021-06-07': 'Wind'
};

export function getPromptForDate(date: Date) {
    const key = date.toISOString().substr(0, 10);
    return prompts[key] ?? '...';
}