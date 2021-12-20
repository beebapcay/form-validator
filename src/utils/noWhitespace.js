/**
 * Return true if the given value is not empty & does not contain any whitespace character
 * (i.e tab, space, new line, carriage return).
 *
 * @param value The string to be checked
 * @returns {boolean}
 */
export function noWhitespace(value) {
    const pattern = /^\S+$/i
    return pattern.test(value)
}