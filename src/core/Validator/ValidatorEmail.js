import Validator from './Validator.js';

class ValidatorEmail extends Validator {
  constructor(wrappee) {
    super(wrappee);
    this.regexPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  }

  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;
    
    const value = selector.value;
    if (!value.match(this.regexPattern)) {
      errorTrigger.trigger({ message: this.wrappee.message });
    }
  }

  performValid(selector) {
    if (!(selector.nodeName === 'INPUT')) return;
    
    const value = selector.value;
    if (value.match(this.regexPattern)) return true;
    return false;
  }
}

export default ValidatorEmail;