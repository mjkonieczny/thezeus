import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import app from './app';

const port = process.env.PORT || 3000;

const server = express()
server.use(cors({ allowedHeaders: '*' }));
server.use(bodyParser.json())

server.get('/', (req, res) => res.send(app()))

server.listen(port, () => process.stdout.write(`Running on :${port}\n`));

if (module.hot) {
  module.hot.accept('./app');
}
