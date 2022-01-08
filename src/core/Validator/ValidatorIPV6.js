import { REGEX_IPV6 } from '../../utils/index.js';
import ValidatorWithSingleInput from './ValidatorWithSingleInput.js';

class ValidatorIPV6 extends ValidatorWithSingleInput {
  constructor(rule) {
    super(rule, REGEX_IPV6);
  }
}

export default ValidatorIPV6;