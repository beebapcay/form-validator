import Component from './Component.js';
import Element from './Element.js';

class Form extends Component {
  constructor(options, validator, form) {
    super(options, validator);
    this.elements = [];

    // divide form into element
    if (form) {
      for (let i = 0; i < form.length; i++) {
        this.elements.push(new Element(options, validator, form[i]));
      }
    }
  }

  retrieve() {
    // TODO: restore elements
    return undefined;
  }

  validate(options) {
    //this.validator.validate(options);
    for (let element of this.elements) element.validate();
  }
}

export default Form;
