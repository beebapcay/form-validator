import Validator from './Validator.js';
import {Error} from "../ErrorTrigger/index.js";

class ValidatorPost extends Validator {
  constructor(rule) {
    super(rule);
    this.regexPattern = /^[0-9]{5}(?:-[0-9]{4})?$|^[0-9]{5}(?:-[0-9]{5})?$|^[0-9]{6}(?:-[0-9]{6})?$/g
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

export default ValidatorPost;