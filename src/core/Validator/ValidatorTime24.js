import Validator from './Validator.js';

class ValidatorTime24 extends Validator {
  constructor(rule) {
    super(rule);
    this.regexPattern = /^(?:0?\d|1\d|2[0-3]):(?:[0-5]\d)$/;
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

export default ValidatorTime24;