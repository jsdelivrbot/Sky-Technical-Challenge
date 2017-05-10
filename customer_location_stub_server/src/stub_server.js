import express from 'express';
import http from 'http';

const app = express();
const port = process.env.PORT || 3002;
const server = http.createServer(app);
server.listen(port);

// Print connection status
console.log('Server listening on: ', port);

const CUSTOMER_ID_1 = 'customer_1';
const CUSTOMER_ID_2 = 'customer_2';
const LOCATION_1 = 'LONDON';
const LOCATION_2 = 'LIVERPOOL';
const RESPONSE_ERROR = 'There was a problem retrieving the customer information';

// global controller to allow CORS
app.get('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', function (req, res) {
    res.status(404).send(RESPONSE_ERROR)
});


app.get('/:customer_id', function (req, res) {

	const customerId = req.params.customer_id;

    switch(customerId) {
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






