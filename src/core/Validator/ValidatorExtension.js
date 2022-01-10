import Validator from './Validator.js';
import { Error } from '../ErrorTrigger/index.js';

const extension_regex = "^.{1,}\\.(";

class ValidatorExtension extends Validator {
  constructor(rule) {
    super(rule);
  }

  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;

    const value = selector.value;
    // const max = parseInt(this.argument);
    if (!this.check(value)) {
      errorTrigger.trigger(new Error(selector, this.rule.message(this.argument), value));
    }
  }

  performValid(selector) {
    if (!(selector.nodeName === 'INPUT')) return false;

    const value = selector.value;
    return this.check(value);
  }

  check(value) {
    const extend = this.argument;
    var extension = extension_regex + extend + ")";
    const new_regex = RegExp(extension);
    return new_regex.test(value);
  }
}

export default ValidatorExtension;

