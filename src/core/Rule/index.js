import Rule from './Rule.js';
import validator from '../Validator/ValidatorMap.js';

const rules = [
  new Rule('alphaonly', validator.alphaonly, 'Only alphabets are allowed.'),
  new Rule('date', validator.date, 'The value must be date type 2015-03-25T14:48:00 or 2015/03/25 or 2015-03-25 or 25 Mar 2015'),
  new Rule('require', validator.require, "The value must have value"),
  new Rule('email', validator.email, 'The value must be email'),
  new Rule('post', validator.require, 'The value must be post code type 12345 or 12345-1234 or 12345-12345 or 123456 or 123456-123456'),
  new Rule('phone', validator.phone, 'The value must be phone type +84723832106, 0723837106, 072-383-7106'),
  new Rule('url', validator.url, 'The value must be url'),
];


export default rules;
