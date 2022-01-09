export const Yahoo_regex = /^[^@]+@(yahoo|ymail|rocketmail)\.com$/

export function yahoo(str) {
    return Yahoo_regex.test(str)
}