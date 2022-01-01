import defaultRules from '../Rule/index.js';
import Rule from '../Rule/Rule.js';

class Component {
  constructor(selector, rules) {
    this.selector = selector;
    this.rules = defaultRules;

    rules?.forEach((rule) => {
      const existRule = this.rules.find((r) => r.name === rule.name);
      if (existRule) existRule.update(rule.message);
      else this.rules.push(new Rule(rule.name, rule.validator, rule.message));
    });
  }

  setup() {
    if (!this.selector) {
      console.warn("Nothing selected, can't validate, returning nothing.");
      return;
    }

    $(this.selector).attr('novalidate', 'novalidate');
  }

  validate(errorTrigger) {
    this.setup();
    return this.performValidate(errorTrigger);
  }

  performValidate(errorTrigger) {
    return undefined;
  }

  valid() {
    this.setup();
    return this.performValid();
  }

  performValid() {
    return undefined;
  }
}

export default Component;
