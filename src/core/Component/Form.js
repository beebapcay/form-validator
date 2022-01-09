import Component from './Component.js';
import Element from './Element.js';
import defaultRules from '../Rule/index.js';
import Rule from '../Rule/Rule.js';

class Form extends Component {
  constructor(selector, rules, schema, options = 'simple') {
    super(selector, rules, options);

    this.rules = defaultRules;

    rules?.forEach((rule) => {
      const existRule = this.rules.find((r) => r.name === rule.name);
      if (existRule) {
        if (rule.validator) existRule.updateValidator(rule.validator);
        if (rule.message) existRule.updateMessage(rule.message);
      } else this.rules.push(new Rule(rule.name, rule.validator, rule.message));
    });

    this.elements = [];

    // retrieve all elements and add schema
    $(this.selector)
      .children()
      .each((i, e) => {
        if (schema) {
          const schemaRules = schema[$(e).attr('name')];
          if (schemaRules) Object.entries(schemaRules).forEach(([key, value]) => $(e).data(key, value));
        }

        this.elements.push(new Element(e, this.rules, this.options));
      });
  }

  removePreviousErrorDom() {
    // remove all element have class error_validator
    const elements = document.getElementsByClassName('error_validator');
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }

  performValidate(errorTrigger) {
    // add onsubmit event listen
    const context = this;
    this.selector[0].addEventListener(
      'submit',
      function (event) {
        event.preventDefault();

        context.removePreviousErrorDom();
        context.elements.forEach((element) => {
          element.validate(errorTrigger.clone(element.selector));
        });
      },
      true
    );
  }

  performValid() {
    const isErrors = [];
    this.elements.forEach((element) => isErrors.push(!element.valid()));
    return isErrors.every((error) => error === false);
  }
}

export default Form;
