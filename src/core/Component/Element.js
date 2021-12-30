import Component from './Component.js';
import WrapMethod from './WrapMethod.js';
import * as allMethod from '../../utils/';
import { camelize } from '../../utils/camelize.js';

class Element extends Component {
  constructor(selector, validator) {
    super(selector, validator);
  }

  performValidate(options) {
    this.validator.validate(this.selector, options);
  }

  performValid(options) {
    this.validator.valid(this.selector, options);
  }
}

export default Element;
