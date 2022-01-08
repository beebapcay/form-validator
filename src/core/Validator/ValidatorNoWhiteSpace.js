import { REGEX_NO_WHITESPACE } from '../../utils/index.js';
import ValidatorWithSingleInput from './ValidatorWithSingleInput.js';

class ValidatorNoWhiteSpace extends ValidatorWithSingleInput {
  constructor(rule) {
    super(rule, REGEX_NO_WHITESPACE);
  }
}

export default ValidatorNoWhiteSpace;