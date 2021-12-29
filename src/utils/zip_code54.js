export function zipCode(value){ // zip code 5 or 5-4
    var regexPattern = /^[0-9]{5}(?:-[0-9]{4})?$/g;
    return regexPattern.test(value);
}