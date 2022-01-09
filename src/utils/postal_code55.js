export function postalCode55(value){ //postal code 5-5 or 5
    var regexPattern = /^[0-9]{5}(?:-[0-9]{5})?$/g;
    return regexPattern.test(value);
}