const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const { sendBasicEmail } = require('./services/email-service');

const setupAndStart = () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);

    sendBasicEmail(
      'support123@gmail.com',
      'its.sparshh@gmail.com',
      'This is testing email',
      'Hey, how are you'
    );
  });
};
setupAndStart();
