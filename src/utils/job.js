var cron = require('node-cron');
const sender = require('../config/emailConfig');

const { TicketService } = require('../services/index');
const ticketService = new TicketService();

const setUpJobs = () => {
  cron.schedule('*/2 * * * *', async () => {
    // console.log('running a task every  5 minute');
    const response = await ticketService.fetchPendingEmails();
    response.forEach((email) => {
      sender.sendMail(
        {
          to: email.recepientEmail,
          subject: email.subject,
          text: email.content,
        },
        async (err, data) => {
          if (err) console.log(err);
          else {
            console.log(data);
            await ticketService.updateTIcket(email.id, { status: 'SUCCESS' });
          }
        }
      );
    });
    console.log(response);
  });
};
module.exports = setUpJobs;
