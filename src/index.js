import ErrorTriggerByLog from './core/ErrorTrigger/ErrorTriggerByLog.js';

const errorLog = new ErrorTriggerByLog(
  {
    window: '11',
    document: 0,
  },
  new ErrorTriggerByLog(
    {
      window: '10',
      document: 1,
    },
    undefined
  )
);

errorLog.trigger(new Error('test'));
