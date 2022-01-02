import Rule from './Rule.js';
import validator from '../Validator/ValidatorMap.js';

const rules = [];

rules.push(new Rule('alphaonly', validator.alphaonly, 'Only alphabets are allowed.'));
rules.push(new Rule('date', validator.date, 'The value must be date type 2015-03-25T14:48:00 or 2015/03/25 or 2015-03-25 or 25 Mar 2015'));
rules.push(new Rule('require', validator.require, "The value must have value"));
rules.push(new Rule('email', validator.email, 'The value must be email'));
rules.push(new Rule('post', validator.require, 'The value must be post code type 12345 or 12345-1234 or 12345-12345 or 123456 or 123456-123456'));
rules.push(new Rule('phone', validator.phone, 'The value must be phone type +84723832106, 0723837106, 072-383-7106'));
rules.push(new Rule('url', validator.url, 'The value must be url'));


export default rules;
