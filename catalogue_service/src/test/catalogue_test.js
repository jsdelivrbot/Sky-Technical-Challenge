//Require the dev-dependencies
import chai from 'chai';
import chaiHttp from  'chai-http';
import server from '../index';
const should = chai.should();
chai.use(chaiHttp);

describe('Catalogue', () => {
    describe('/GET catalogue', () => {

        it('it should GET all national products if a locationId is not provided', (done) => {
            chai.request(server)
                .get('/catalogue')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(2);
                    done();
                });
        });

        it('it should GET all relavant products for London', (done) => {
            chai.request(server)
                .get('/catalogue/LONDON')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(2);
                    done();
                });
        });

        it('it should GET all relavant products for Liverpool', (done) => {
            chai.request(server)
                .get('/catalogue/LIVERPOOL')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(2);
                    done();
                });
        });
    });

});