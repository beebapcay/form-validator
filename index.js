import Form from './src/core/Component/Form.js';
import ErrorTriggerByAlert from './src/core/ErrorTrigger/ErrorTriggerByAlert.js';
import ErrorTriggerByLog from './src/core/ErrorTrigger/ErrorTriggerByLog.js';
import ErrorTriggerByDom from './src/core/ErrorTrigger/ErrorTriggerByDom.js';
import Rule from './src/core/Rule/Rule.js';

const newValidator;

const form = new Form($('#form'), [
  new Rule('name', null, '名前を入力してください'),
]);

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
