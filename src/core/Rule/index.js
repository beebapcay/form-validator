import Rule from './Rule.js';
import validator from '../Validator/ValidatorMap.js';

const rules = [
  new Rule('alphaonly', validator.alphaonly, 'Only alphabets are allowed.'),
  new Rule('date', validator.date, 'The value must be date type yyyy/mm/dd'),
  new Rule('require', validator.require, "This field must have a value"),
  new Rule('email', validator.email, 'The value must be email'),
  new Rule('post', validator.require, 'The value must be post code type 12345 or 12345-1234 or 12345-12345 or 123456 or 123456-123456'),
  new Rule('phone', validator.phone, 'The value must be phone type +84723832106, 0723837106, 072-383-7106'),
  new Rule('url', validator.url, 'The value must be url'),
  new Rule('minlength', validator.minlength, 'The value must have length bigger than min length'),
  new Rule('maxlength', validator.maxlength, 'The value must have length smaller than max length'),
  new Rule('time12', validator.time12, 'The value must be time between 00:00AM to 12:59PM'),
  new Rule('time24', validator.time24, 'The value must be time between 00:00 to 23:59'),
  new Rule('ipv4', validator.ipv4, 'The value must be in IPvV4 format'),
  new Rule('ipv6', validator.ipv6, 'The value must be in IPvV6 format'),
  new Rule('nowhitespace', validator.nowhitespace, 'The value must not contain any whitespace'),
  new Rule('numberonly', validator.numberonly, 'The value must contain numbers only'),
  new Rule('regex', validator.regex, function (argument) {
    return `The value must match with the provided regular expression: ${argument}`
  }),
  new Rule('creditcard', validator.creditcard, 'The value must be Visa or Mastercard'),
  new Rule('extension', validator.extension, 'The value must be a files name with extension'),
  new Rule('manyemail', validator.manyemail, 'The value must be one or more email separated by ";" symbol'),
  new Rule('gmail', validator.gmail, 'The email must be from google domain (@gmail.com or @google.com)'),
  new Rule('yahoo', validator.yahoo, 'The email must be from Yahoo domain (@yahoo.com, @ymail.com or @rocketmail.com)'),
];


export default rules;
