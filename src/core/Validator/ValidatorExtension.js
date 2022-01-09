import { Extension_regex } from '../../utils/index.js';
import ValidatorExpression from './ValidatorExpression.js';

export default class ValidatorExtension extends ValidatorExpression {
  constructor(rule, options) {
    super(rule, options, Extension_regex);
  }
}
