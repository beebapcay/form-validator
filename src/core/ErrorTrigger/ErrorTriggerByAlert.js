import ErrorTriggerDecorator from './ErrorTriggerDecorator.js';

class ErrorTriggerByAlert extends ErrorTriggerDecorator {
  triggerAction(error) {
    this.errorList.push(error);
  }

  triggerAction2(){
    if (this.errorList.length === 0) return;
    let msg = ''
    this.name = $(this.context).attr('name')
    if (this.name !== undefined) {
      msg += `Error occurred at element has the name: ${this.name}\n`
    }
    if (this.context.value !== undefined) {
      msg += `Current value: ${this.context.value} \n`
    }
    this.errorList.forEach(error => {
      msg += error.message + '\n';
    });
    alert(msg);
  }

  clone(context) {
    return new ErrorTriggerByAlert(context);
  }
}

export default ErrorTriggerByAlert;
