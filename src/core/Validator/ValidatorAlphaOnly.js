import Validator from './Validator.js';

class ValidatorAlphaOnly extends Validator {
  constructor(wrappee) {
    super(wrappee);
  }

  performValidate(selector, errorTrigger) {
    const checker = $.data(selector, 'alphaonly');
    if (!checker || !selector.is('input')) return;

    const value = selector.val();
    if (!value.match(/[^a-zA-Z]/)) {
      errorTrigger.trigger({ message: options.message });
    }
  }

  performValid(selector) {
    const checker = $.data(selector, 'alphaonly');
    if (!checker) return;

    const value = selector.val();
    if (value.match(/[^a-zA-Z]/)) return true;
    return false;
  }
}

export default ValidatorAlphaOnly;
