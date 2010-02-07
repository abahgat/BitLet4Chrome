// The possible log levels.
var logLevels = {
    "none": 0,
    "error": 1,
    "info": 2
};

var logPrefix = "BitLet extension: ";

// Defines the current log level. Values other than "none" are for debugging
// only and should at no point be checked in.
var currentLogLevel = logLevels.info;

function debugMsg(loglevel, text) {
  if (loglevel <= currentLogLevel) {
    console.log(logPrefix + text);
  }
}