import Validator from './Validator.js';

class ValidatorRequire extends Validator {
  constructor(wrappee) {
    super(wrappee);
  }

  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;

    const value = selector.value;
    if (!value) {
      errorTrigger.trigger({ message: this.wrappee.message });
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