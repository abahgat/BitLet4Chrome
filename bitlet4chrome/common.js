/*
Copyright 2010 Alessandro Bahgat Shehata and Daniele Castagna

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// The possible log levels.
var logLevels = {
    "none": 0,
    "error": 1,
    "info": 2
};

var logPrefix = "BitLet extension: ";

// Defines the current log level. Values other than "none" are for debugging
// only and should at no point be checked in.
var currentLogLevel = logLevels.none;

function debugMsg(loglevel, text) {
  if (loglevel <= currentLogLevel) {
    console.log(logPrefix + text);
  }
}