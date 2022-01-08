import Component from './Component.js';
import Element from './Element.js';
import defaultRules from '../Rule/index.js';

class Form extends Component {
  constructor(selector, rules) {
    super(selector, rules);

    this.rules = defaultRules;

    rules?.forEach((rule) => {
      const existRule = this.rules.find((r) => r.name === rule.name);
      if (existRule) {
        if (rule.validator) existRule.validator = rule.validator;
        if (rule.message) existRule.message = rule.message;
      } else this.rules.push(new Rule(rule.name, rule.validator, rule.message));
    });

    this.elements = [];
  }

  retrieve() {
    if (this.elements.length !== 0) return;
    $(this.selector)
      .children()
      .each((i, e) => this.elements.push(new Element(e, this.rules)));
  }

  performValidate(errorTrigger) {
    this.retrieve();

    // remove all element have class error_validator
    const elements = document.getElementsByClassName('error_validator');
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }

    this.elements.forEach((element) => element.validate(errorTrigger.clone(element.selector)));
  }

  validate(errorTrigger) {
    this.setup();
    // set the selector for error trigger
    if (errorTrigger) {
      errorTrigger.setContext(this.selector);
    }
    // add onsubmit event listen
    const context = this;
    this.selector[0].addEventListener(
      'submit',
      function (event) {
        event.preventDefault();
        context.performValidate(errorTrigger);
      },
      true
    );
  }

  valid() {
    this.retrieve();
    const isErrors = [];
    this.elements.forEach((element) => isErrors.push(!element.valid()));
    return isErrors.every((error) => error === false);
  }
}

export default Form;
