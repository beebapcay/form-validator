class Rule {
  constructor(name, validator, message) {
    this.name = name;
    this.validator = validator;
    this.message = message;
  }

  update(message) {
    this.message = message;
  }
}

export default Rule;
