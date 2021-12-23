export function extension(str) {
    const regex = /^.{1,}\.[^\\]+$/

    return regex.test(str)
}