import Component from './Component.js';

class Element extends Component {
  constructor(selector, rules, options) {
    super(selector, rules, options);

    this.validator = null;
    this.isRequire = false;
  }

  performValidate(errorTrigger) {
    this.setupValidators();
    if (this.isRequire === false && this.selector.value === '') return;
    this.validator?.validate(this.selector, errorTrigger);
    errorTrigger.notify();
  }

  performValid() {
    this.setupValidators();
    // ignore elements that do not have validators
    if (!this.validator) return true;
    return this.validator?.valid(this.selector);
  }

  setupValidators() {
    let wrapTemp = null;
    const checkers = $(this.selector).data();

    Object.entries(checkers).forEach(([key, value]) => {
      const rule = this.rules.find((rule) => rule.name === key);

      const validator = rule?.validator;
      if (!validator) return false;

      // sure that require is the first wrap
      if (rule.name === 'require') {
        this.isRequire = true;
        const wrap = new validator(rule, this.options);
        wrap.setWrap(this.validator);
        this.validator = wrap;
        if (wrapTemp === null) wrapTemp = this.validator;
        return false;
      }

      if (this.validator === null) {
        this.validator = new validator(rule, this.options);
        wrapTemp = this.validator;
      } else {
        const wrap = new validator(rule, this.options);
        wrapTemp.setWrap(wrap);
        wrapTemp = wrap;
      }
      wrapTemp.setAgrument(value);
    });
  }
}

export default Element;
