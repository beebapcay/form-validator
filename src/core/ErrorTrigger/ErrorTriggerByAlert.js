import ErrorTriggerDecorator from './ErrorTriggerDecorator.js';

class ErrorTriggerByAlert extends ErrorTriggerDecorator {
  triggerAction(error) {
    alert(error.getDefaultMessage());
  }

  clone(context) {
    return new ErrorTriggerByAlert(context);
  }
}

export default ErrorTriggerByAlert;
