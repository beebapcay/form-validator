import Validator from './Validator.js';
import { Error } from '../ErrorTrigger/index.js';

class ValidatorExpression extends Validator {
  constructor(rule, options, regexPattern) {
    super(rule, options);
    this.regexPattern = regexPattern;
  }

  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;

    const value = selector.value;
    if (!value.match(this.regexPattern)) {
      errorTrigger.trigger(new Error(selector, this.rule.message, value));
    }
  }

  performValid(selector) {
    if (!(selector.nodeName === 'INPUT')) return false;

    const value = selector.value;
    return !!value.match(this.regexPattern);
  }

  check(value) {
    return value.match(this.regexPattern);
  }
}

export default ValidatorExpression;
