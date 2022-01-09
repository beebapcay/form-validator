import { Yahoo_regex } from '../../utils/index.js';
import ValidatorExpression from './ValidatorExpression.js';

export default class ValidatorYahoo extends ValidatorExpression {
  constructor(rule, options) {
    super(rule, options, Yahoo_regex);
  }
}
