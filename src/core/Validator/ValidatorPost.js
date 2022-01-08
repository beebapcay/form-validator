import ValidatorExpression from './ValidatorExpression.js';

const regexPattern =  /^[0-9]{5}(?:-[0-9]{4})?$|^[0-9]{5}(?:-[0-9]{5})?$|^[0-9]{6}(?:-[0-9]{6})?$/g;

class ValidatorPost extends ValidatorExpression {
  constructor(rule) {
    super(rule,regexPattern);
  }
}

export default ValidatorPost;