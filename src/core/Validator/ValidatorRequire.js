import Validator from './Validator.js';

class ValidatorRequire extends Validator {
  constructor(rule) {
    super(rule);
  }

  validate(selector, errorTrigger) {
    const value = selector.value;
    if (value !== "")
    {
       this.wrappee?.validate(selector, errorTrigger);
    }
    return this.performValidate(selector, errorTrigger);
  }

  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;

    const value = selector.value;
    if (!value) {
      errorTrigger.trigger({ message: this.rule.message });
    }
  }

  performValid(selector) {
    if (!(selector.nodeName === 'INPUT')) return false;
    
    const value = selector.value;
    return !!value;
  }
}

export default ValidatorRequire;