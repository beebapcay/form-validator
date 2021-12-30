import Component from './Component.js';
import Element from './Element.js';

class Form extends Component {
  constructor(selector, validator) {
    super(selector, validator);
    this.elements = [];
  }

  retrieve() {
    this.selector.children().each((i, e) => this.elements.push(new Element(e, this.validator)));
  }

  performValidate(options) {
    this.retrieve();
    this.elements.forEach((element) => element.validate(options));
  }

  valid() {
    this.retrieve();
    const isErrors = [];
    this.elements.forEach((element) => isErrors.push(!element.valid()));
    return isErrors.every((error) => error === false);
  }
}

export default Form;
