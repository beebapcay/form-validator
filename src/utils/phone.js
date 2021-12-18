function phone(value){ //+84723832106, 0723837106, 072-383-7106
    var regexPattern = /^([\+][0-9]{4}|[0-9]{3})?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
    return regexPattern.test(value);
}