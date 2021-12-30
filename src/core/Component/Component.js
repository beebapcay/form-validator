import Validator from '../Validator/Validator.js';

class Component {
  constructor(selector, validator) {
    this.selector = selector;
    this.validator = validator;
  }

  setup() {
    if (!selector) {
      console.warn("Nothing selected, can't validate, returning nothing.");
      return;
    }

    selector.atrr('novalidate', 'novalidate');
  }

  validate(options) {
    this.setup();
    return this.performValidate(options);
  }

  performValidate(options) {
    return undefined;
  }

  valid() {
    this.setup();
    return this.performValid();
  }

  performValid() {
    return undefined;
  }
}

export default Component;
