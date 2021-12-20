/**
 * Return true when the given string (value) is not empty & contains
 * only numbers.
 *
 * @param value
 * @return {boolean}
 */
export function numberOnly(value) {
    const pattern = /^\d+$/i
    return pattern.test(value)
}