import Validator from './Validator';

class ValidatorAlphaOnly extends Validator {
  performValidate(selector, options) {
    const checker = $.data(selector, 'alphaonly');
    if (!checker) return;

    //valid here & error message
  }

  performValid(selector) {
    const checker = $.data(selector, 'alphaonly');
    if (!checker) return;

    //valid here
  }
}
