import Component from './Component.js';

class Element extends Component {
  constructor(selector, rules, options) {
    super(selector, rules, options);

    this.validator = null;
    this.isRequire = false;

    this.setupValidators();
  }

  performValidate(errorTrigger) {
    // this.setupValidators();
    if (this.isRequire === false && this.selector.value === '') return;
    this.validator?.validate(this.selector, errorTrigger);
    errorTrigger.notify();
  }

  performValid() {
    // this.setupValidators();
    // ignore elements that do not have validators
    if (!this.validator) return true;
    return this.validator?.valid(this.selector);
  }

  setupValidators() {
    const checkers = $(this.selector).data();
    console.log($(this.selector).attr('name'), checkers);

    Object.entries(checkers).forEach(([key, value]) => {
      if (key === 'require') return false;

      const validator = this.createValidator(key, value);
      if (!validator) return false;

      validator.setWrapee(this.validator);
      this.validator = validator;
    });

    if (checkers.hasOwnProperty('require')) {
      this.isRequire = true;
      const validator = this.createValidator('require', true);
      if (!validator) return false;
      validator.setWrapee(this.validator);
      this.validator = validator;
    }
  }

  createValidator(name, argument) {
    const rule = this.rules.find((rule) => rule.name === name);

    const validator = rule?.validator;
    if (!validator) return null;

    const newValidator = new validator(rule, this.options);
    newValidator.setAgrument(argument);
    return newValidator;
  }
}

export default Element;
