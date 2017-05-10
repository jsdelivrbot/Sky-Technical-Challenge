'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Standard Server dependencies
var app = (0, _express2.default)();


// Route Setup
(0, _router2.default)(app);

// Server Setup
var port = process.env.PORT || 3001;
var server = _http2.default.createServer(app);
server.listen(port);

// Print connection status
console.log("Server listening on: ", port);

exports.default = app;
//# sourceMappingURL=index.js.map