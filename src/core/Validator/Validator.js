class Validator {
  constructor(wrappee) {
    this.wrappee = wrappee;
  }

  validate(selector, errorTrigger) {
    return this.performValidate(selector, errorTrigger);
  }

  performValidate(selector, errorTrigger) {
    return undefined;
  }

  valid(selector) {
    this.wrappee?.valid(selector);
    return this.performValid(selector);
  }

  performValid(selector) {
    return undefined;
  }
}

export default Validator;
