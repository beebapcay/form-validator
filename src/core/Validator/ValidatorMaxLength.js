import Validator from './Validator.js';

class ValidatorMaxLength extends Validator {
  constructor(rule) {
    super(rule);
  }

  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;

    const value = selector.value;
    const max = parseInt(this.argument);
    if (!(value.length <= max)) {
      errorTrigger.trigger({ message: this.rule.message });
    }
  }

  performValid(selector) {
    if (!(selector.nodeName === 'INPUT')) return false;

    const value = selector.value;
    return value.length <= max;
  }
}

export default ValidatorMaxLength;