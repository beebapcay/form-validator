import ErrorTriggerDecorator from './ErrorTriggerDecorator.js';

class ErrorTriggerByDom extends ErrorTriggerDecorator {
  triggerAction(error) {
    document.querySelector(this.context.selector).innerHTML = error.message;
  }
}

export default ErrorTriggerByDom;
