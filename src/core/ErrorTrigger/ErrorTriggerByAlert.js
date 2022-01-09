import ErrorTriggerDecorator from './ErrorTriggerDecorator.js';

class ErrorTriggerByAlert extends ErrorTriggerDecorator {
  triggerAction(error) {
    this.errorList.push(error);
  }

  notify() {
    if (this.errorList.length === 0) return;

    let msg = '';

    const name = $(this.context).attr('name');
    const value = $(this.context).val();

    name && (msg += `Error occurred at element has the name: ${name}\n`);
    value && (msg += `Current value: ${value} \n`);

    this.errorList.forEach((error) => (msg += error.message + '\n'));
    alert(msg);
  }

  clone(context) {
    return new ErrorTriggerByAlert(context);
  }
}

export default ErrorTriggerByAlert;
