/**
 * Return false when at least one file in the given file list (file)
 * exceeds the given size.
 * @param files
 * @param size
 * @returns {boolean}
 */
export function maxSize(files, size) {
    if (files && files.length) {
        for (file of files) {
            if (file.size > size) {
                return false
            }
        }
    }
    return true
}