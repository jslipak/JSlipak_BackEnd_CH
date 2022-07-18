const log4js = require('log4js');
const config = require('../../config');
console.log(config.dev);
//const formatLog = config.dev ? 'consoleType' : 'fileType';
//const levelLog = config.dev ? 'debug' : 'warn';

//log4js.configure({
//appenders: {
//fileType: { type: 'file', filename: 'info.log' },
//consoleType: { type: 'console' },
//},
//categories: {
//default: { appenders: [formatLog], level: levelLog },
//},
//});
log4js.configure({
  appenders: {
    consola: { type: 'console' },
    warnings: { type: 'file', filename: 'warn.log' },
    errores: { type: 'file', filename: 'error.log' },
  },
  categories: {
    default: { appenders: ['consola'], level: 'all' },
    warning: { appenders: ['warnings', 'consola'], level: 'warn' },
  },
});
module.exports = log4js.getLogger();
