import Validator from './Validator.js';

class ValidatorPost extends Validator {
  constructor(wrappee) {
    super(wrappee);
    this.regexPattern = /^[0-9]{5}(?:-[0-9]{4})?$|^[0-9]{5}(?:-[0-9]{5})?$|^[0-9]{6}(?:-[0-9]{6})?$/g
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

export default ValidatorPost;