export const REGEX_NUMBER_ONLY = /^\d+$/i

/**
 * Return true when the given string (value) is not empty & contains
 * only numbers.
 *
 * @param value
 * @return {boolean}
 */
export function numberOnly(value) {
  return REGEX_NUMBER_ONLY.test(value)
}