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
import ValidatorIPV4 from "./ValidatorIPV4";
import ValidatorIPV6 from "./ValidatorIPV6";
import ValidatorNoWhiteSpace from "./ValidatorNoWhiteSpace";
import ValidatorNumberOnly from "./ValidatorNumberOnly";

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
  ipv4: ValidatorIPV4,
  ipv6: ValidatorIPV6,
  nowhitespace: ValidatorNoWhiteSpace,
  numberonly: ValidatorNumberOnly,
};

export default validator;
