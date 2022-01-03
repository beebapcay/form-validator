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
    let validWrappee = true
    if (this.wrappee) {
      validWrappee = this.wrappee?.valid(selector);
    }

    return validWrappee && this.performValid(selector);
  }

  performValid(selector) {
    return undefined;
  }
}

export default Validator;
