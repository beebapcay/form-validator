import ErrorTrigger from './ErrorTrigger.js';
import ErrorTriggerDecorator from './ErrorTriggerDecorator.js';
import ErrorTriggerByDom from './ErrorTriggerByDom.js';
import ErrorTriggerByLog from './ErrorTriggerByLog.js';
import ErrorTriggerByAlert from './ErrorTriggerByAlert.js';

export default class ErrorTriggerFactory {
  createErrorTriggerByDom(context, wrappee) {
    return new ErrorTriggerByDom(context, wrappee);
  }

  createErrorTriggerByLog(context, wrappee) {
    return new ErrorTriggerByLog(context, wrappee);
  }

  createErrorTriggerByAlert(context, wrappee) {
    return new ErrorTriggerByAlert(context, wrappee);
  }
}

export { ErrorTrigger, ErrorTriggerDecorator, ErrorTriggerByDom, ErrorTriggerByLog, ErrorTriggerByAlert };
