export function Integer(str) {
    const regex = /^\d+$/

    return regex.test(str)
}