/*******************************************************************************
 * Copyright (c) 2016 Nicola Del Gobbo
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the license at http://www.apache.org/licenses/LICENSE-2.0
 *
 * THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY
 * IMPLIED WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 * MERCHANTABLITY OR NON-INFRINGEMENT.
 *
 * See the Apache Version 2.0 License for specific language governing
 * permissions and limitations under the License.
 *
 * Contributors - initial API implementation:
 * Nicola Del Gobbo <nicoladelgobbo@gmail.com>
 ******************************************************************************/

'use strict';

/*!
 * Module dependencies
 */
var MaybeMiddlewareError = require('./error/MaybeMiddlewareError');

/**
 * @description Check if the session is available otherwise it return an error
 * @param  {Function} Middleware to anable or disable
 * @param {boolean | Function} Boolean value or function that return boolean 
 * values
 * @return {Function}
 * @version 1.0.0
 * @author Nicola Del Gobbo <nicoladelgobbo@gmail.com>
 */
module.exports = exports = function maybeMiddleWare (middleware, predicate) {
  if (!(middleware && typeof middleware === 'function')) {
    return dispatchError(new MaybeMiddlewareError("The middleware parameter " + 
           "must be a function. See: http://expressjs.com")); 
  }
  if (isBoolean(predicate)) {
    return predicate ? middleware : noMiddleware;
  } else if (predicate && typeof predicate  === 'function' && isBoolean(predicate.call(this))) {
      return predicate.call(this) ? middleware : noMiddleware;
  } else {
    return dispatchError(new MaybeMiddlewareError("The predicate must be a " + 
           "boolean value or a function that return boolean value."));
  }
};

function isBoolean (value) {
  return value === true || value === false || Object.prototype.toString.call(value) === '[object Boolean]';
}

function dispatchError (error) {
  return function (req, res, next) {
      next = next || noop;
      next(error);
  };        
}

function noMiddleware (req, res, next) {
  next = next || noop;
  next();
}

function noop () {}