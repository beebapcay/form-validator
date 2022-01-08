import { REGEX_IPV4 } from '../../utils/index.js';
import ValidatorExpression from './ValidatorExpression.js';

class ValidatorIPV4 extends ValidatorExpression {
  constructor(rule, options) {
    super(rule, options, REGEX_IPV4);
  }
}

export default ValidatorIPV4;
