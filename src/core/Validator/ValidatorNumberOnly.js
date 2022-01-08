import { REGEX_NUMBER_ONLY } from '../../utils/index.js';
import ValidatorWithSingleInput from './ValidatorWithSingleInput.js';

class ValidatorNumberOnly extends ValidatorWithSingleInput {
  constructor(rule) {
    super(rule, REGEX_NUMBER_ONLY);
  }
}

export default ValidatorNumberOnly;
