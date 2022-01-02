import Validator from './Validator.js';

class ValidatorUrl extends Validator {
  constructor(wrappee) {
    super(wrappee);
    this.regexPattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
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

export default ValidatorUrl;