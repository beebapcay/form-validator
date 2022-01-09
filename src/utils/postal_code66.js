export function postalCode66(value){ //postal code 6-6 or 6
    var regexPattern = /^[0-9]{6}(?:-[0-9]{6})?$/g;
    return regexPattern.test(value);
}