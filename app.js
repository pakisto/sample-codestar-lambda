var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World! v1.0",
    "Env": process.env.NODE_ENV
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World! v1.0",
    "Env": process.env.NODE_ENV
  });
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
