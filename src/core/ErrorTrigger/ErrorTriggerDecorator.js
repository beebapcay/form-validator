import ErrorTrigger from './ErrorTrigger.js';

export default class ErrorTriggerDecorator extends ErrorTrigger {
  constructor(context, wrappee) {
    super(context);
    this.wrappee = wrappee;
  }

  trigger(error) {
    this.triggerAction(error);
    this.wrappee?.trigger(error);
  }

  clone(context) {
    return new ErrorTriggerDecorator(context);
  }
}
