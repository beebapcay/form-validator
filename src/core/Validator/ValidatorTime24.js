import ValidatorExpression from './ValidatorExpression.js';

const regexPattern =  /^(?:0?\d|1\d|2[0-3]):(?:[0-5]\d)$/;
class ValidatorTime24 extends ValidatorExpression {
  constructor(rule) {
    super(rule,regexPattern);
  }
}

export default ValidatorTime24;