import Validator from './Validator.js';

class ValidatorRequire extends Validator {
  constructor(rule) {
    super(rule);
  }

  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;

    const value = selector.value;
    if (!value) {
      errorTrigger.trigger({ message: this.rule.message });
    }
  }

  performValid(selector) {
    if (!(selector.nodeName === 'INPUT')) return;
    
    const value = selector.value;
    if (value) return true;
    return false;
  }
}

export default ValidatorRequire;