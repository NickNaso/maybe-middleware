# maybe-middleware
### Express middleware to check if session is available

This middleware check if session is available or not. This is very simple and unnecessary operation unless you use some session storage strategy that for example use MongoDB, Redis or other storage system to serialize and deserialize the session.
Using one of these strategies give us a more effiecient handling of the session but if we restart the express server we need some extra time to get the session available so we cannot handle some request. To avoid possible error you can use sessio-check.

#### Installation
If you want use session-check you have to install it. There are two methods for that:
In your package.json add the following item:
```json
"sessione-check": "version"
```
then digit
```console
npm install
```

**Example**:
```json
"session-check": "*" for the latest version
"session-check": "1.0.0" for the version 1.0.0
```

**OR**

launch this command:
```console
npm install session-check --save
```

#### Use
```javascript
const sessionCheck = require('session-check');

//Import some other required modules
const express = require('express');
const app = express();
//Some other configuration for the express app and session

app.use(sessionCheck()); 
```
In this example session-check dispatch an Error with message ("Session is not yet ready.") to Express error handler. 

You could set a custom error message as reported below:

```javascript
app.use(sessionCheck("My personal message error about session")); 
```

In the end is also possible pass an error objet to session-check middleware that provide to dispatch it to Express error handler.

You could set a custom error object as reported below:

```javascript
app.use(sessionCheck(new MyError("My personal message error onject session")); 
```

