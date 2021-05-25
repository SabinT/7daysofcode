export function getStartOfNextMonth(date: Date): Date {
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    date.setHours(0, 0, 0, 0);
    return date;
}

export function getStartOfMonth(date: Date): Date {
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return date;
}

export function isChallengeActive(date: Date): boolean {
    return date.getDate() <= 7;
}

export function isChallengeAboutToStart(date: Date): boolean {
    return date.getDate() > 21;
}