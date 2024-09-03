const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const setupAndStart = () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
};
setupAndStart();
