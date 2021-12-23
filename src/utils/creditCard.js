export function creditCard(str) {
    const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$ | ^(?:5[1-5][0-9]{14})$/ //visa & mastercard

    return regex.test(str)
}