import ErrorTriggerDecorator from './ErrorTriggerDecorator.js';

class ErrorTriggerByAlert extends ErrorTriggerDecorator {
  triggerAction(error) {
    alert(error.message);
  }

  clone(context) {
    return new ErrorTriggerByAlert(context);
  }
}

export default ErrorTriggerByAlert;
