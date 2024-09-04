const sender = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');

class TicketService {
  constructor() {
    this.ticketRepository = new TicketRepository();
  }
  async createNotification(data) {
    try {
      const response = await this.ticketRepository.create(data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async sendBasicEmail(mailFrom, mailTo, mailSubject, mailBody) {
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
  }
  async updateTIcket(ticketId, data) {
    try {
      const response = await this.ticketRepository.update(ticketId, data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async fetchPendingEmails(timestamp) {
    try {
      const response = await this.ticketRepository.get({ status: 'PENDING' });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = TicketService;
