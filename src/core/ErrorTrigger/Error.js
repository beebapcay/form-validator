export default class Error {
  constructor(selector, message, value) {
    this.name = $(selector).attr('name');
    this.selector = selector;
    this.message = message;
    this.value = value;
  }

  getDefaultMessage() {
    let msg = ''
    if (this.name !== undefined) {
      msg += `Error occurred at element has the name: ${this.name}\n`
    }
    if (this.value !== undefined) {
      msg += `Current value: ${this.value}\n`
    }
    msg += `${this.message}`
    return msg
  }
}