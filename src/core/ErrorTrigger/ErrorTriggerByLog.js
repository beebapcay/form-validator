import ErrorTriggerDecorator from './ErrorTriggerDecorator.js';

class ErrorTriggerByLog extends ErrorTriggerDecorator {
  triggerAction(error) {
    console.error(error.message);
  }
}

export default ErrorTriggerByLog;
