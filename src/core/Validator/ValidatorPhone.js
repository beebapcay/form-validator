import ValidatorExpression from './ValidatorExpression.js';

const regexPattern = /^([\+][0-9]{4}|[0-9]{3})?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
class ValidatorPhone extends ValidatorExpression {
  constructor(rule, options) {
    super(rule, options, regexPattern);
  }
}

export default ValidatorPhone;
