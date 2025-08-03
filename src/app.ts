import express from 'express';
import routes from './routes';

// Create an instance of the Express application.
// This 'app' object will be used to define routes, middleware, and start the server.
const app = express();

//Middlewares
app.use(express.json());

//Routes
app.use('/api', routes);

export default app;
