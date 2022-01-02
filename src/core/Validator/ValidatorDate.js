import Validator from './Validator.js';

class ValidatorDate extends Validator {
  constructor(wrappee) {
    super(wrappee);
  }

  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;
    
    const value = selector.value;
    if (isNaN(new Date(value))) {
      errorTrigger.trigger({ message: this.wrappee.message});
    }
  }

  performValid(selector) {
    if (!(selector.nodeName === 'INPUT')) return;
    
    const value = selector.value;
    if (!isNaN(new Date(value))) return true;
    return false;
  }
}

export default ValidatorDate;
