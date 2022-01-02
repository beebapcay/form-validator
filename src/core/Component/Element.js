import Component from './Component.js';

class Element extends Component {
  constructor(selector, rules) {
    super(selector, rules);

    this.validator = null;

    var wrapTemp = null;
    const checkers = $(this.selector).data();
    Object.entries(checkers).forEach(([key, value]) => {
      const a = rules.find((rule) => rule.name === key);
      const validator = a?.validator;
      if (!validator) return false;
      if (this.validator === null)
      {
          this.validator = new validator(a);
          wrapTemp = this.validator;
      } else{
          const wrap = new validator(a);
          wrapTemp.setWrap(wrap);
          wrapTemp = wrap;
      }
    });
  }

  performValidate(errorTrigger) {
    this.validator?.validate(this.selector, errorTrigger);
  }

  performValid() {
    this.validator?.valid(this.selector, errorTrigger);
  }
}

export default Element;
