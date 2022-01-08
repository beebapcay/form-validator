import ValidatorExpression from './ValidatorExpression.js';

const regexPattern = /^[0-9]{5}(?:-[0-9]{4})?$|^[0-9]{5}(?:-[0-9]{5})?$|^[0-9]{6}(?:-[0-9]{6})?$/g;

class ValidatorPost extends ValidatorExpression {
  constructor(rule, options) {
    super(rule, options, regexPattern);
  }
}

export default ValidatorPost;
