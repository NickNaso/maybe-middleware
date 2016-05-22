# maybe-middleware
### Wrapper for dinamically enable or disable express middleware

This wrapper allow you to dinamically enable or disable an express middleware.
In some circumstances you would use a middleware only if some conditions are
met.

#### Installation
If you want use maybe-middleware you have to install it. There are two methods for that:
In your package.json add the following item:
```json
"maybe-middleware": "version"
```
then digit
```console
npm install
```
**Example**:
```json
"maybe-middleware": "*" for the latest version
"maybe-middleware": "1.0.0" for the version 1.0.0
```

**OR**

launch this command:
```console
npm install maybe-middleware --save
```
#### Use
```javascript
var maybeMiddleware = require('maybe-middleware');

// Import some other required modules
var express = require('express');
var app = express();
var responsePoweredBy = require('response-powered-by');
var POWERED_BY = "@NIckNaso";
// Some other configuration for the express app and session

// predicate as boolean
app.use(maybeMiddleware(responsePoweredBy(POWERED_BY), true));

// predicate as function
app.use(maybeMiddleware(
  responsePoweredBy(POWERED_BY),
  function () {
    // some other instructions ...
    return true;
  }
));
```
The first parameter for maybe-middleware is an express middleware, while the
second is a boolean value or a function that return a boolean value.
If the parameter's type do not match with those required an error will be
dispatched to the express error middleware. In pariticular the error will be an
instance of **MaybeMiddlewareError**.
