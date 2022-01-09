import Validator from './Validator.js';
import {Error} from '../ErrorTrigger/index.js';

class ValidatorRegex extends Validator {
  constructor(rule) {
    super(rule);
  }

  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;

    const value = selector.value;
    // const max = parseInt(this.argument);
    if (!this.check(value)) {
      errorTrigger.trigger(
        new Error(selector, this.rule.message(this.argument), value)
      );
    }
  }

  performValid(selector) {
    if (!(selector.nodeName === 'INPUT')) return false;

    const value = selector.value;
    return this.check(value);
  }

  check(value) {
    if (!this.argument || typeof this.argument !== 'string') return true;

    const regex = new RegExp(this.argument);
    return regex.test(value);
  }
}

export default ValidatorRegex;
