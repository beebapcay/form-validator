/**
 * Convert kebab-case to camelCase
 * @param string the string to be converted
 * @return a string in camelCase
 */
export function camelize(string) {
    if (typeof string === 'string') {
        return string.replace(/-./g, x => x[1].toUpperCase())
    }
    return string
}