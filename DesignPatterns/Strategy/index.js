var logger = require('./Logger');

logger.log('Hello');
logger.log('Hi');
logger.log('Ola');

logger.changeStrategy('toFile');

logger.log('Hello');
logger.log('Hi');
logger.log('Ola');