import Validator from './Validator.js';

class ValidatorAlphaOnly extends Validator {
  constructor(wrappee) {
    super(wrappee);
    this.regexPattern = /[^a-zA-Z]/;
  }

  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;

    const value = selector.value;
    if (!value.match(this.regexPattern)) {
      errorTrigger.trigger({ message: this.wrappee.message});
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
