import Validator from './Validator.js';
import {Error} from "../ErrorTrigger/index.js";

class ValidatorDate extends Validator {
  constructor(rule) {
    super(rule);
    this.regexPattern = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
  }

  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;
    
    const value = selector.value;
    if (!value.match(this.regexPattern)) {
      errorTrigger.trigger(new Error(
        selector,
        this.rule.message,
        value,
      ));
    }
  }

  performValid(selector) {
    if (!(selector.nodeName === 'INPUT')) return;

    const value = selector.value;
    return !!value.match(this.regexPattern);
  }
}

export default ValidatorDate;
