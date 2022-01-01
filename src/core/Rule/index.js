import Rule from './Rule.js';
import validator from '../Validator/ValidatorMap.js';

const rules = [];

rules.push(new Rule('alphaonly', validator.alphaonly, 'Only alphabets are allowed.'));

export default rules;
