class ErrorTrigger {
  constructor(context) {
    this.context = context;
    this.errorList = [];
  }

  setContext(context) {
    this.context = context;
  }

  triggerAction(error) {
    return undefined;
  }

  triggerAction2(){
    return undefined;
  }

  trigger(error) {
    return undefined;
  }

  clone(context) {
    return undefined;
  }
}

export default ErrorTrigger;
