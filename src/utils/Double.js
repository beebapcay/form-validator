export function Double(str) {
    const regex = /^\d+(\.\d+){1}$/

    return regex.test(str)
}