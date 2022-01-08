import ErrorTriggerDecorator from './ErrorTriggerDecorator.js';

class ErrorTriggerByDom extends ErrorTriggerDecorator {
  triggerAction(error) {
    document.querySelector(this.context.selector).innerHTML = error.getDefaultMessage();
  }

  clone(context) {
    return new ErrorTriggerByDom(context);
  }
}

export default ErrorTriggerByDom;
