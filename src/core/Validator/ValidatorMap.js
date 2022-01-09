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
import ValidatorIPV4 from "./ValidatorIPV4.js";
import ValidatorIPV6 from "./ValidatorIPV6.js";
import ValidatorNoWhiteSpace from "./ValidatorNoWhiteSpace.js";
import ValidatorNumberOnly from "./ValidatorNumberOnly.js";
import ValidatorRegex from "./ValidatorRegex.js";
import ValidatorCreditCard from "./ValidatorCreditCard.js";
import ValidatorExtension from "./ValidatorExtension.js";
import ValidatorManyEmail from './ValidatorManyEmail.js';
import ValidatorGmail from './ValidatorGmail.js';
import ValidatorYahoo from './ValidatorYahoo.js';

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
  regex: ValidatorRegex,
  creditcard: ValidatorCreditCard,
  extension: ValidatorExtension,
  manyemail: ValidatorManyEmail,
  gmail: ValidatorGmail,
  yahoo: ValidatorYahoo,
};

export default validator;
