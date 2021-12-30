class Validator {
  constructor(wrappee, options, errorTrigger) {
    this.wrappee = wrappee;
    this.options = options;
    this.errorTrigger = errorTrigger;
  }

  validate(selector, options) {
    this.wrappee.validate(selector, options);
    return this.performValidate(selector, options);
  }

  performValidate(selector, options) {
    return undefined;
  }

  valid(selector) {
    this.wrappee.valid(selector);
    return this.performValid(selector);
  }

  performValid(selector) {
    return undefined;
  }
}

export default Validator;
