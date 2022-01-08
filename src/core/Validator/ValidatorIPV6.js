import { REGEX_IPV6 } from '../../utils/index.js';
import ValidatorExpression from './ValidatorExpression.js';

class ValidatorIPV6 extends ValidatorExpression {
  constructor(rule, options) {
    super(rule, options, REGEX_IPV6);
  }
}

export default ValidatorIPV6;
