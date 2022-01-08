import ValidatorExpression from './ValidatorExpression.js';

const regexPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
class ValidatorEmail extends ValidatorExpression {
  constructor(rule) {
    super(rule,regexPattern);
  }
}

export default ValidatorEmail;