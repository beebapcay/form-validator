import Component from './Component.js';

class Element extends Component {
  constructor(selector, rules) {
    super(selector, rules);

    this.validator = null;

    const checkers = $(this.selector).data();
    Object.entries(checkers).forEach(([key, value]) => {
      const a = rules.find((rule) => rule.name === key);
      const validator = a?.validator;
      if (!validator) return false;
      this.validator = new validator(this.validator);
    });
  }

  performValidate(errorTrigger) {
    this.validator?.validate(this.selector, errorTrigger);
  }

  performValid() {
    this.validator?.valid(this.selector);
  }
}

export default Element;
