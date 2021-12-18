function bban(value){
    var regexPattern = /^([0-9A-Z]{20,30})$/gm;
    return regexPattern.test(value);
}