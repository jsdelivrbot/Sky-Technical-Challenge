import catalogue from './controllers/catalogue';

export default (app) => {
    // global controller to allow CORS
    app.get('/*', (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
    });

    // product catalogue endpoint returns product channels based on locationID
    // national channels are always returned
    // if no locationID is provided, only national channels will be returned
    app.get('/catalogue/:locationID?', catalogue);

};