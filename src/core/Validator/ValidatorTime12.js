import Validator from './Validator.js';

class ValidatorTime12 extends Validator {
  constructor(rule) {
    super(rule);
    this.regexPattern = /^(?:0?[0-9]|1[0-2])[-:][0-5][0-9]\s*[AP]M$/g;
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

export default ValidatorTime12;