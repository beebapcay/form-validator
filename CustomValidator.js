import Validator from './src/core/Validator/Validator.js';
import { Error } from './src/core/ErrorTrigger/index.js';
import Rule from './src/core/Rule/Rule.js';

class CustomValidator extends Validator {
  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;

    const value = selector.value;
    if (!(value === 'ABC')) {
      errorTrigger.trigger(new Error(selector, this.rule.message, value));
    }
  }

  performValid(selector) {
    if (!(selector.nodeName === 'INPUT')) return false;

    const value = selector.value;
    return value === 'ABC';
  }
}
