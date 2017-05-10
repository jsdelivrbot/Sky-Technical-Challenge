'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Data = require('../Data');

var _Data2 = _interopRequireDefault(_Data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res) {

    // Extract location ID from parameters
    var locationID = req.params.locationID;

    // Filter channels by the provided location and always include national channels
    var locationProduct = _Data2.default.reduce(function (acc, curr) {
        return acc.concat({
            id: curr.id,
            category: curr.category,
            channels: curr.channels.filter(function (channel) {
                return channel.location === locationID || channel.location === 'NATIONAL';
            }) });
    }, []);

    // Return product channels
    res.status(200).json(locationProduct);
};
//# sourceMappingURL=catalogue.js.map