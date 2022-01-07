import ValidatorAlphaOnly from './ValidatorAlphaOnly.js';
import ValidatorUrl from './ValidatorUrl.js';
import ValidatorEmail from './ValidatorEmail.js';
import ValidatorPost from './ValidatorPost.js';
import ValidatorDate from './ValidatorDate.js';
import ValidatorRequire from './ValidatorRequire.js';
import ValidatorPhone from './ValidatorPhone.js';
import ValidatorMinLength from './ValidatorMinLength.js'
import ValidatorMaxLength from './ValidatorMaxLength.js'
import ValidatorTime12 from './ValidatorTime12.js';
import ValidatorTime24 from './ValidatorTime24.js';

export const validator = {
  alphaonly: ValidatorAlphaOnly,
  url: ValidatorUrl,
  email: ValidatorEmail,
  post: ValidatorPost,
  date: ValidatorDate,
  require: ValidatorRequire,
  phone: ValidatorPhone,
  minlength: ValidatorMinLength,
  maxlength: ValidatorMaxLength,
  time12: ValidatorTime12,
  time24: ValidatorTime24,
};

export default validator;
