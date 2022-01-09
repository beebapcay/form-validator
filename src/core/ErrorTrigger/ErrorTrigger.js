export default class ErrorTrigger {
  constructor(context) {
    this.context = context;
    this.errorList = [];
  }

  triggerAction(error) {
    return undefined;
  }

  notify() {
    return undefined;
  }

  trigger(error) {
    return undefined;
  }

  clone(context) {
    return undefined;
  }
}
