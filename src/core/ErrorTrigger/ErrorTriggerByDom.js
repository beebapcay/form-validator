import ErrorTriggerDecorator from './ErrorTriggerDecorator.js';

class ErrorTriggerByDom extends ErrorTriggerDecorator {
  triggerAction(error) {
    // create new node
    var errorTextNode = document.createElement('p');
    var content = document.createTextNode(error.message);
    errorTextNode.appendChild(content);
    errorTextNode.className = 'error_validator';

    // add node after element
    this.context.parentNode.insertBefore(errorTextNode, this.context.nextSibling);
  }

  clone(context) {
    return new ErrorTriggerByDom(context);
  }
}

export default ErrorTriggerByDom;
