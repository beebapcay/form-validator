import ErrorTriggerDecorator from './ErrorTriggerDecorator.js';

class ErrorTriggerByLog extends ErrorTriggerDecorator {
  triggerAction(error) {
    console.error(error.getDefaultMessage());
  }

  clone(context) {
    return new ErrorTriggerByLog(context);
  }
}

export default ErrorTriggerByLog;
