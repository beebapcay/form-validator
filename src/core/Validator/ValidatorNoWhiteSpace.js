import { REGEX_NO_WHITESPACE } from '../../utils/index.js';
import ValidatorExpression from './ValidatorExpression.js';

class ValidatorNoWhiteSpace extends ValidatorExpression {
  constructor(rule) {
    super(rule, REGEX_NO_WHITESPACE);
  }
}

export default ValidatorNoWhiteSpace;
