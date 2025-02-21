import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes.js';
import swaggerUi from 'swagger-ui-express';
//import swaggerJsdoc from 'swagger-jsdoc';
//import swaggerDocument from './swagger.json';

const app = express();
const PORT = 3000;


// mongoose connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb+srv://stoffe:jellyfish@cluster0.ylcg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
mongoose.connect('mongodb://localhost/local');

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

// const options = {
//     definition: {
//     openapi: '3.1.0',
//     info: {
//     title: 'Express API with Swagger',
//     version: '0.1.0',
//     description: 'This is a simple CRUD API application made with Express and documented with Swagger',
//     license: {
//     name: 'MIT',
//     url: 'https://spdx.org/licenses/MIT.html',
//     },
//     contact: {
//     name: 'API Support',
//     url: 'https://example.com',
//     email: 'support@example.com',
//     },
//     },
//     servers: [
//     {
//     url: 'http://localhost:3000',
//     },
//     ],
//     },
//     apis: ['./src/routes/*.js'],
//     };
import swaggerDoc from './swagger-output.json' with {type:"json"};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));



app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);