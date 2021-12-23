import ErrorTrigger from './ErrorTrigger.js';

class ErrorTriggerDecorator extends ErrorTrigger {
  constructor(context, wrappee) {
    super(context);
    this.wrappee = wrappee;
  }

  triggerAction(error) {
    return undefined;
  }

  trigger(error) {
    this.triggerAction(error);
    this.wrappee?.trigger(error);
  }
}

export default ErrorTriggerDecorator;
