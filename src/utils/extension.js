export const Extension_regex = /^.{1,}\.[^\\]+$/

export function extension(str) {
    return Extension_regex.test(str)
}