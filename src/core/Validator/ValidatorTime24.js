import Validator from './Validator.js';
import { Error } from '../ErrorTrigger';

class ValidatorTime24 extends Validator {
  constructor(rule) {
    super(rule);
    this.regexPattern = /^(?:0?\d|1\d|2[0-3]):(?:[0-5]\d)$/;
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

export default ValidatorTime24;
