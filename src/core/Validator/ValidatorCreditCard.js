import { CreditCard_regex } from '../../utils/index.js';
import ValidatorExpression from './ValidatorExpression.js';

class ValidatorCreditCard extends ValidatorExpression {
  constructor(rule, options) {
    super(rule, options, CreditCard_regex);
  }
}

export default ValidatorCreditCard;