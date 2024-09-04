const sender = require('../config/emailConfig');

const sendBasicEmail = (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    });
  } catch (error) {
    throw error;
  }
};
module.exports = {
  sendBasicEmail,
};
