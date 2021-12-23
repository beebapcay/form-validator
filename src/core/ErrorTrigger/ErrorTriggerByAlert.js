import ErrorTriggerDecorator from './ErrorTriggerDecorator.js';

class ErrorTriggerByAlert extends ErrorTriggerDecorator {
  triggerAction(error) {
    alert(error.message);
  }
}

export default ErrorTriggerByAlert;
