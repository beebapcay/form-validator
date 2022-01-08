import Validator from './Validator.js';
import {Error} from "../ErrorTrigger";

class ValidatorEmail extends Validator {
  constructor(rule) {
    super(rule);
    this.regexPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
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
    if (!(selector.nodeName === 'INPUT')) return false;
    
    const value = selector.value;
    return !!value.match(this.regexPattern);
  }
}

export default ValidatorEmail;