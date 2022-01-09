class Rule {
  constructor(name, validator, message) {
    this.name = name;
    this.validator = validator;
    this.message = message;
  }

  updateMessage(message) {
    this.message = message;
  }

  updateValidator(validator) {
    this.validator = validator;
  }
}

export default Rule;
