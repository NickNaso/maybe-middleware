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

/**
 * MaybeMiddlewareError constructor
 * @constructs MaybeMiddlewareError
 * @param {string} msg Description message for the error
 * @inherits Error https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error
 */
function MaybeMiddlewareError (msg) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.caputerStackTrace(this);
  } else {
    this.stack = new Error().stack;
  }
  this.message = msg;
  this.name = 'MaybeMiddlewareError';
}

/*!
 * Inherits from Error
 */
MaybeMiddlewareError.prototype = Object.create(Error.prototype);
MaybeMiddlewareError.prototype.constructor = Error;


/*!
 * Module exports
 */
module.exports = exports = MaybeMiddlewareError;