import Validator from './Validator.js';
import { Error } from '../ErrorTrigger/index.js';
import ValidatorExpression from './ValidatorExpression.js';

const regexPattern = /[^a-zA-Z]/;
class ValidatorAlphaOnly extends ValidatorExpression {
  constructor(rule, options) {
    super(rule, options, regexPattern);
  }
}

export default ValidatorAlphaOnly;
