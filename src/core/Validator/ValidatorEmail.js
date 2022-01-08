import ValidatorExpression from './ValidatorExpression.js';

const regexPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
class ValidatorEmail extends ValidatorExpression {
  constructor(rule, options) {
    super(rule, options, regexPattern);
  }
}

export default ValidatorEmail;
