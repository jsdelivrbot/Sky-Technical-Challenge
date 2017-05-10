'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var should = _chai2.default.should(); //During the test the env variable is set to test

//Require the dev-dependencies

_chai2.default.use(_chaiHttp2.default);

describe('Catalogue', function () {
    /*
     * Test the /GET route
     */
    describe('/GET catalogue', function () {

        it('it should GET all national products if a locationId is not provided', function (done) {
            _chai2.default.request(_index2.default).get('/catalogue').end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(2);
                done();
            });
        });

        it('it should GET all relavant products for London', function (done) {
            _chai2.default.request(_index2.default).get('/catalogue/LONDON').end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(2);
                done();
            });
        });

        it('it should GET all relavant products for Liverpool', function (done) {
            _chai2.default.request(_index2.default).get('/catalogue/LIVERPOOL').end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(2);
                done();
            });
        });
    });
});
//# sourceMappingURL=catalogue_test.js.map