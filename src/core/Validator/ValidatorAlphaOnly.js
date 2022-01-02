import Validator from './Validator.js';

class ValidatorAlphaOnly extends Validator {
  constructor(rule) {
    super(rule);
    this.regexPattern = /[^a-zA-Z]/;
  }

  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;

    const value = selector.value;
    if (!value.match(this.regexPattern)) {
      errorTrigger.trigger({ message: this.rule.message});
    }
  }

  performValid(selector) {
    if (!(selector.nodeName === 'INPUT')) return;
    
    const value = selector.value;
    if (value.match(this.regexPattern)) return true;
    return false;
  }
}

export default ValidatorAlphaOnly;
