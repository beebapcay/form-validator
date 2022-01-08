import Form from './src/core/Component/Form.js';
import ErrorTriggerByDom from './src/core/ErrorTrigger/ErrorTriggerByDom.js';
import Rule from './src/core/Rule/Rule.js';

const form = new Form($('#form'), [
  new Rule('email', null, 'メールを入力してください'),
  new Rule('phone', null, '電話番号を入力してください'),
  new Rule('require', null, 'このフィールドは必須です'),
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
