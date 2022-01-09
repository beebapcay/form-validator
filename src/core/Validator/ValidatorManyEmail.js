import { ManyEmail_regex } from '../../utils/index.js';
import ValidatorExpression from './ValidatorExpression.js';

class ValidatorManyEmail extends ValidatorExpression {
  constructor(rule, options) {
    super(rule, options, ManyEmail_regex);
  }
}