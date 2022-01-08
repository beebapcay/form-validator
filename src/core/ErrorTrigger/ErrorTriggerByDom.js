import ErrorTriggerDecorator from './ErrorTriggerDecorator.js';

class ErrorTriggerByDom extends ErrorTriggerDecorator {
  triggerAction(error) {
    // create new node
    var newItem = document.createElement("p");
    var textnode = document.createTextNode(error.message);
    newItem.appendChild(textnode);
    newItem.className = 'error_validator';
    newItem.id = "error" +  this.context.getAttribute("name");

    // add node after element
    this.context.parentNode.insertBefore(newItem,this.context.nextSibling);
  }

  clone(context) {
    return new ErrorTriggerByDom(context);
  }
}

export default ErrorTriggerByDom;
