class Validator {
  constructor(rule) {
    this.rule = rule;
    this.wrappee = null;
  }

  setWrap(wrappee){
    this.wrappee = wrappee;
  }

  validate(selector, errorTrigger) {
    this.wrappee?.validate(selector, errorTrigger);
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
