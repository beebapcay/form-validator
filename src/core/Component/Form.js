import Component from './Component.js';
import Element from './Element.js';

class Form extends Component {
  constructor(selector, rules) {
    super(selector, rules);
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
    this.elements.forEach((element) => element.validate(errorTrigger.clone(element)));
  }

  validate(errorTrigger) {
    this.setup();
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
