import ValidatorExpression from './ValidatorExpression.js';

const regexPattern =  /^(?:0?[0-9]|1[0-2])[-:][0-5][0-9]\s*[AP]M$/g;

class ValidatorTime12 extends ValidatorExpression {
  constructor(rule) {
    super(rule,regexPattern);
  }
}

export default ValidatorTime12;