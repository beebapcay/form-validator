export const CreditCard_regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$|^(?:5[1-5][0-9]{14})$/ //visa & mastercard

export function creditCard(str) {
    return CreditCard_regex.test(str)
}