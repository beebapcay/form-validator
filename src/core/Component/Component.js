import Rule from '../Rule/Rule.js';

class Component {
  constructor(selector, rules, options = 'simple') {
    this.selector = selector;
    this.rules = rules;
    this.options = options; // simple | debug
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
