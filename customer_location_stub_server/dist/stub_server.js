'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3002;
var server = _http2.default.createServer(app);
server.listen(port);

// Print connection status
console.log('Server listening on: ', port);

var CUSTOMER_ID_1 = 'customer_1';
var CUSTOMER_ID_2 = 'customer_2';
var LOCATION_1 = 'LONDON';
var LOCATION_2 = 'LIVERPOOL';
var RESPONSE_ERROR = 'There was a problem retrieving the customer information';

// global controller to allow CORS
app.get('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', function (req, res) {
    res.status(404).send(RESPONSE_ERROR);
});

app.get('/:customer_id', function (req, res) {

    var customerId = req.params.customer_id;

    switch (customerId) {
        case !customerId !== CUSTOMER_ID_1:
            res.status(404).send(RESPONSE_ERROR);
            break;
        case !customerId !== CUSTOMER_ID_2:
            res.status(404).send(RESPONSE_ERROR);
            break;
        case CUSTOMER_ID_1:
            res.send(LOCATION_1);
            break;
        case CUSTOMER_ID_2:
            res.send(LOCATION_2);
            break;
        default:
            res.status(404).send(RESPONSE_ERROR);
    }
});
//# sourceMappingURL=stub_server.js.map