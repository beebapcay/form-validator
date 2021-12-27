import Validator from '../Validator/Validator.js';

class Component {
  constructor(options, validator) {
    this.options = options;
    this.validator = validator;
  }

  validate(options) {
    return this.validator.validate(options);
  }
}

export default Component;
