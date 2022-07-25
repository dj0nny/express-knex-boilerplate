const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({
    hello: 'Express - Knex boilerplate 📦',
  });
});

module.exports = app;
