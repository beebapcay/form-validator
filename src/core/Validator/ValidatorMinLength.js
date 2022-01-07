import Validator from './Validator.js';

class ValidatorMinLength extends Validator {
  constructor(rule) {
    super(rule);
  }

  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;
    
    const value = selector.value;
    const min = parseInt(this.argument);
    if (!(value.length >= min)) {
      errorTrigger.trigger({ message: this.rule.message });
    }
  }

  performValid(selector) {
    if (!(selector.nodeName === 'INPUT')) return false;
    
    const value = selector.value;
    return value.length >= min;
  }
}

export default ValidatorMinLength;