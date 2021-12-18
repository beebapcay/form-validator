function iban(value){
    var regexPattern = /^([A-Z]{2}\d{2} ?\d{4} ?\d{4} ?\d{4} ?\d{4} ?[\d]{0,2})$/gm;
    return regexPattern.test(value);
}