import ValidatorExpression from './ValidatorExpression.js';

const regexPattern = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
class ValidatorDate extends ValidatorExpression {
  constructor(rule, options) {
    super(rule, options, regexPattern);
  }
}

export default ValidatorDate;
