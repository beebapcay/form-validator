class Validator {
  constructor(rule, options) {
    this.rule = rule;
    this.wrappee = null;
    this.options = options;
  }

  setWrap(wrappee) {
    this.wrappee = wrappee;
  }

  setAgrument(argument) {
    this.argument = argument;
  }

  validate(selector, errorTrigger) {
    this.performValidate(selector, errorTrigger);
    if ((options === 'simple' && this.check(selector.value)) || options === 'monitor')
      this.wrappee?.validate(selector, errorTrigger);
  }

  performValidate(selector, errorTrigger) {
    return undefined;
  }

  valid(selector) {
    let validWrappee = true;
    if (this.wrappee) {
      validWrappee = this.wrappee?.valid(selector);
    }

    return validWrappee && this.performValid(selector);
  }

  performValid(selector) {
    return undefined;
  }

  check(value) {
    return undefined;
  }
}

export default Validator;
