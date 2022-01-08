import Validator from './Validator.js';
import {Error} from "../ErrorTrigger";

class ValidatorUrl extends Validator {
  constructor(rule) {
    super(rule);
    this.regexPattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  }

  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;

    const value = selector.value;
    if (!value.match(this.regexPattern)) {
      errorTrigger.trigger(new Error(
        selector,
        this.rule.message,
        value,
      ));
    }
  }

  performValid(selector) {
    if (!(selector.nodeName === 'INPUT')) return false;

    const value = selector.value;
    return !!value.match(this.regexPattern);
  }
}

export default ValidatorUrl;