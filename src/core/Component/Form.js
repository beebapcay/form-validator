import Component from './Component.js';
import Element from './Element.js';

class Form extends Component {
  constructor(selector, rules) {
    super(selector, rules);
    this.elements = [];
  }

  retrieve() {
    $(this.selector)
      .children()
      .each((i, e) => this.elements.push(new Element(e, this.rules)));
  }

  performValidate(errorTrigger) {
    this.retrieve();
    this.elements.forEach((element) => element.validate(errorTrigger));
  }

  valid() {
    this.retrieve();
    const isErrors = [];
    this.elements.forEach((element) => isErrors.push(!element.valid()));
    return isErrors.every((error) => error === false);
  }
}

export default Form;
