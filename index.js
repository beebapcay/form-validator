import Form from './src/core/Component/Form.js';
import ErrorTriggerByDom from './src/core/ErrorTrigger/ErrorTriggerByDom.js';
import ErrorTriggerByAlert from './src/core/ErrorTrigger/ErrorTriggerByAlert.js';
import Rule from './src/core/Rule/Rule.js';
import Validator from './src/core/Validator/Validator.js';
import { Error } from './src/core/ErrorTrigger/index.js';

// Add a custom rule by extending Validator class
class CustomValidator extends Validator {
  performValidate(selector, errorTrigger) {
    if (!(selector.nodeName === 'INPUT')) return;

    const value = selector.value;
    if (!(value === 'ABC')) {
      errorTrigger.trigger(new Error(selector, this.rule.message, value));
    }
  }

  performValid(selector) {
    if (!(selector.nodeName === 'INPUT')) return false;

    const value = selector.value;
    return value === 'ABC';
  }
}

const form = new Form(
  $('#form'),
  null,
  {
    'date-of-birth': {
      require: true,
      date: true,
    },
  },
  'debug'
);

form.validate(new ErrorTriggerByDom());
$(document).ready(() => {
  $('#valid').on('click', (e) => {
    e.preventDefault();
    $('#check-valid-result').text(form.valid() ? 'true' : 'false');
  });
});

// require
// date
// email
// post
// phone
// address
// url
