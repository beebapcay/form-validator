export function time12(value){ // time between 00:00AM to 12:59PM
    var regexPattern = /^(?:0?[0-9]|1[0-2])[-:][0-5][0-9]\s*[AP]M$/g;
    return regexPattern.test(value);
}