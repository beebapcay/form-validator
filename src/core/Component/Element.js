import Component from './Component.js';
import Validator from '../Validator/Validator.js';

class Element extends Component {
  constructor(selector, rules) {
    super(selector, rules);

    this.validator = [];

    const checkers = $(this.selector).data();
    Object.entries(checkers).forEach(([key, value]) => {
      const a = rules.find((rule) => rule.name === key);
      const validator = a?.validator;
      if (!validator) return false;
      this.validator.push(new validator(a));
    });
  }

  performValidate(errorTrigger) {
    this.validator.forEach(validator => {
      validator?.validate(this.selector, errorTrigger);
    });
  }

  performValid() {
    this.validator.forEach(validator => {
      validator?.valid(this.selector, errorTrigger);
    });
  }
}

export default Element;
