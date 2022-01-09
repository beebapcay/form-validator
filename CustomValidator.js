import Validator from './src/core/Validator/Validator.js';
import { Error } from './src/core/ErrorTrigger/index.js';
import Rule from './src/core/Rule/Rule.js';

export default class CustomValidator extends Validator {
  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;

    const value = selector.value;
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
    return value === 'HELLO WORLD';
  }
}
