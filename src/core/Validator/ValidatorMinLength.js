import Validator from './Validator.js';
import { Error } from '../ErrorTrigger/index.js';

class ValidatorMinLength extends Validator {
  constructor(rule) {
    super(rule);
  }

  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;

    const value = selector.value;
    // const min = parseInt(this.argument);
    if (!this.check(value)) {
      errorTrigger.trigger(new Error(selector, this.rule.message, value));
    }
  }

  performValid(selector) {
    if (!(selector.nodeName === 'INPUT')) return false;

    const value = selector.value;
    return this.check(value);
  }

  check(value) {
    const min = parseInt(this.argument);
    return value.length >= min;
  }
}

export default ValidatorMinLength;
