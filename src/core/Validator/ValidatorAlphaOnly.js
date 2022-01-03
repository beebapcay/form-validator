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
    if (!(selector.nodeName === 'INPUT')) return false;
    
    const value = selector.value;
    return !!value.match(this.regexPattern);
  }
}

export default ValidatorAlphaOnly;
