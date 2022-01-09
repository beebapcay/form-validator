import { Gmail_regex } from '../../utils/index.js';
import ValidatorExpression from './ValidatorExpression.js';

class ValidatorGmail extends ValidatorExpression {
  constructor(rule, options) {
    super(rule, options, Gmail_regex);
  }
}