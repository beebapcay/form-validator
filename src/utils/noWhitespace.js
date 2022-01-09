export const REGEX_NO_WHITESPACE = /^\S+$/i

/**
 * Return true if the given value is not empty & does not contain any whitespace character
 * (i.e tab, space, new line, carriage return).
 *
 * @param value The string to be checked
 * @returns {boolean}
 */
export function noWhitespace(value) {
    return REGEX_NO_WHITESPACE.test(value)
}