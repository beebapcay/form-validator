import Component from './Component.js';

class Element extends Component {
  constructor(selector, rules) {
    super(selector, rules);

    this.validator = null;
    this.haveRequire = false;

    var wrapTemp = null;
    const checkers = $(this.selector).data();
    Object.entries(checkers).forEach(([key, value]) => {
      const a = rules.find((rule) => rule.name === key);
      const validator = a?.validator;
      if (!validator) return false;

      // sure that require is the first wrap
      if (a.name === "require"){
        this.haveRequire = true;
        const wrap = new validator(a);
        wrap.setWrap(this.validator);
        this.validator = wrap;
        if (wrapTemp === null)
            wrapTemp = this.validator;
        return false;
      }

      if (this.validator === null) {
        this.validator = new validator(a);
        wrapTemp = this.validator;
      } else {
        const wrap = new validator(a);
        wrapTemp.setWrap(wrap);
        wrapTemp = wrap;
      }
      wrapTemp.setAgrument(value);
    });
  }

  performValidate(errorTrigger) {
    if (this.haveRequire === false && this.selector.value === "") return;
    this.validator?.validate(this.selector, errorTrigger);
  }

  performValid() {
    // ignore elements that do not have validators
    if (!this.validator) return true
    return this.validator?.valid(this.selector);
  }
}

export default Element;
