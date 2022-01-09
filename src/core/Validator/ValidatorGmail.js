import { Gmail_regex } from '../../utils/index.js';
import ValidatorExpression from './ValidatorExpression.js';

export default class ValidatorGmail extends ValidatorExpression {
  constructor(rule, options) {
    super(rule, options, Gmail_regex);
  }
}
