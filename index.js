import Form from './src/core/Component/Form.js';
import ErrorTriggerByAlert from './src/core/ErrorTrigger/ErrorTriggerByAlert.js';

const form = new Form($('#form'));

form.validate(new ErrorTriggerByAlert());

// require
// date
// email
// post
// phone
// address
// url
