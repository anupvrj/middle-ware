const express = require('express');
const app = express();

const beforeMiddleware = function(req, res, next) {
  console.log('Before middleware triggered');
  next();
}

const responseHandler = function(req, res, next) {
    console.log('Response Action implementation triggered with response instead of send');
    res.status(200).send({"response":"fine-as-normal"});
    next();
}

const afterMiddleware = function(req, res, next) {
    console.log('After middleware triggered');
    next(); /* Can be removed safely */
}

app.get('/implement', beforeMiddleware, responseHandler, afterMiddleware);

app.listen(9001, '127.0.0.1', function() {
    console.log('Server started at port ' + 'localhost' + ':' + 9001);
});