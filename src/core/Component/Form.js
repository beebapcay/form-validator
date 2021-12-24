import Component from './Component';

class Form extends Component {
  constructor(options, validator) {
    super(options, validator);
    this.elements = [];
  }

  retrieve() {
    // TODO: restore elements
    return undefined;
  }

  validate(options) {
    this.validator.validate(options);
    for (let element of this.elements) element.validate();
  }
}

export default Form;
