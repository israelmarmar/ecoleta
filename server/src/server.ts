import express from 'express';
import routes from './routes';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate';

const app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

const port = process.env.PORT || 3333;

app.listen(port);
