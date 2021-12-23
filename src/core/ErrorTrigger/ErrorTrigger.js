/**
 * This using Decorator pattern and Template method pattern
 */

class ErrorTrigger {
  constructor(context) {
    this.context = context;
  }

  triggerAction(error) {
    return undefined;
  }

  trigger(error) {
    return undefined;
  }
}

export default ErrorTrigger;
