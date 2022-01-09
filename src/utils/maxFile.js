/**
 * Return false when the size of file list is larger than the given value.
 * @param files
 * @param value
 * @returns {boolean}
 */
export function maxFile(files, value) {
    if (files && files.length) {
        return files.length <= value
    }
    return true
}