export default class Error {
  constructor(selector, message) {
    this.selector = selector;
    this.message = message;
  }

  generateMessage() {
    const msg = '';

    const name = $(this.selector).attr('name');
    const value = $(this.selector).val();

    name && (msg += `Error occurred at element has the name: ${name}\n`);
    value && (msg += `Current value: ${this.value}\n`);
    msg += `${this.message}`;
    return msg;
  }
}
