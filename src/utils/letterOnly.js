/**
 * Return true when the given string (value) is not empty & contains
 * only upper and lowercase unicode letter.
 *
 * @param value
 * @return {boolean}
 */
export function letterOnly(value) {
    const pattern = /^[a-zA-Z]+$/i
    return pattern.test(value)
}