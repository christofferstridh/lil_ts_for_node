import swaggerAutogen from 'swagger-autogen';
import { ContactSchema } from './src/models/crmModel.js';
const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'localhost:3000',
  definitions: {Contact: ContactSchema}
};

const outputFile = './swagger-output.json';
const routes = ['./src/routes/*.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);