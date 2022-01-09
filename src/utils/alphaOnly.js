/**
 * Return true when the given string (value) is not empty & contains
 * only upper and lowercase letters, numbers, and underscores.
 *
 * @param value
 * @return {boolean}
 */
export function alphaOnly(value) {
    const pattern = /^\w+$/i
    return pattern.test(value)
}