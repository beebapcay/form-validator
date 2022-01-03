import Validator from './Validator.js';

class ValidatorPhone extends Validator {
  constructor(rule) {
    super(rule);
    this.regexPattern = /^([\+][0-9]{4}|[0-9]{3})?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
  }

  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;
    
    const value = selector.value;
    if (!value.match(this.regexPattern)) {
      errorTrigger.trigger({ message: this.rule.message });
    }
  }

  performValid(selector) {
    if (!(selector.nodeName === 'INPUT')) return false;
    
    const value = selector.value;
    return !!value.match(this.regexPattern);
  }
}

export default ValidatorPhone;