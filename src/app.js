const express = require('express');

const app = express();

const errorHandler = require('./middlewares/error.middleware');
const api = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({
    hello: 'Express - Knex boilerplate 📦',
  });
});

app.use('/api', api);

app.use(errorHandler);

module.exports = app;
