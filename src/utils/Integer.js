export function integer(str) {
    const regex = /^\d+$/

    return regex.test(str)
}