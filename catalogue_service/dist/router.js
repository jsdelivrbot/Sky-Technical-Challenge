'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _catalogue = require('./controllers/catalogue');

var _catalogue2 = _interopRequireDefault(_catalogue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
    // global controller to allow CORS
    app.get('/*', function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        next();
    });

    // product catalogue endpoint returns product channels based on locationID
    // national channels are always returned
    // if no locationID is provided, only national channels will be returned
    app.get('/catalogue/:locationID?', _catalogue2.default);
};
//# sourceMappingURL=router.js.map