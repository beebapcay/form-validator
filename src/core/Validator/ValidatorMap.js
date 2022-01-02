import ValidatorAlphaOnly from './ValidatorAlphaOnly.js';
import ValidatorUrl from './ValidatorUrl.js';
import ValidatorEmail from './ValidatorEmail.js';
import ValidatorPost from './ValidatorPost.js';
import ValidatorDate from './ValidatorDate.js';
import ValidatorRequire from './ValidatorRequire.js';
import ValidatorPhone from './ValidatorPhone.js';

export const validator = {
  alphaonly: ValidatorAlphaOnly,
  url: ValidatorUrl,
  email: ValidatorEmail,
  post: ValidatorPost,
  date: ValidatorDate,
  require: ValidatorRequire,
  phone: ValidatorPhone,
};

export default validator;
