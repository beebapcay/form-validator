export const Gmail_regex = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/

export function gmail(str) {
    return Gmail_regex.test(str)
}