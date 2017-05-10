// Standard Server dependencies
import express from 'express';
import http from 'http';
const app = express();
import router from './router';

// Route Setup
router(app);

// Server Setup
const port = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(port);

// Print connection status
console.log("Server listening on: ", port);

export default app