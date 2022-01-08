import Validator from './Validator.js';
import {Error} from "../ErrorTrigger/index.js";

class ValidatorMaxLength extends Validator {
  constructor(rule) {
    super(rule);
  }

  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;

    const value = selector.value;
    const max = parseInt(this.argument);
    if (!(value.length <= max)) {
      errorTrigger.trigger(new Error(
        selector,
        this.rule.message,
        value,
      ));
    }
  }

  performValid(selector) {
    if (!(selector.nodeName === 'INPUT')) return false;

    const value = selector.value;
    const max = parseInt(this.argument);
    return value.length <= max;
  }
}

export default ValidatorMaxLength;