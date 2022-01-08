import { REGEX_NUMBER_ONLY } from '../../utils/index.js';
import ValidatorExpression from './ValidatorExpression.js';

class ValidatorNumberOnly extends ValidatorExpression {
  constructor(rule) {
    super(rule, REGEX_NUMBER_ONLY);
  }
}

export default ValidatorNumberOnly;
