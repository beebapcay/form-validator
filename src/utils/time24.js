export function time24(value){ // time between 00:00 to 23:59
    var regexPattern = /^(?:0?\d|1\d|2[0-3]):(?:[0-5]\d)$/;
    return regexPattern.test(value);
}