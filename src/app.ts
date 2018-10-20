import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import expressValidator from 'express-validator';
import logger from 'morgan';
import { ProductsRouter } from './routes';
// import { AuthRouter, SwaggerAPIRouter, UserRouter } from './routes';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env' || '.env.example' });

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 8080);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

// Primary app routes
app.use('/products', ProductsRouter);
/**
 * Add swagger endpoints
 */
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
// app.use('/api/v1', SwaggerAPIRouter);

app.use((_: express.Request, resp: express.Response) => {
  resp.status(404).send({
    msg: 'Not Found!'
  });
});

export default app;
