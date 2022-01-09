import Form from './src/core/Component/Form.js';
import ErrorTriggerByDom from './src/core/ErrorTrigger/ErrorTriggerByDom.js';
import ErrorTriggerByAlert from './src/core/ErrorTrigger/ErrorTriggerByAlert.js';

const form = new Form(
  $('#form'), // selector
  null, // custom rule
  {
    // schema
    'date-of-birth': {
      require: true,
    },
  },
  'debug' // options
);

form.validate(new ErrorTriggerByDom());
$(document).ready(() => {
  $('#valid').on('click', (e) => {
    e.preventDefault();
    $('#check-valid-result').text(form.valid() ? 'true' : 'false');
  });
});
