const { TicketService } = require('../services/index');

const ticketService = new TicketService();
const create = async (req, res) => {
  try {
    const response = await ticketService.createNotification(req.body);
    res.status(201).json({
      success: true,
      err: {},
      data: response,
      message: 'Successfully registered an email',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      err: error,
      data: {},
      message: 'Something went wrong while registering an email',
    });
  }
};
module.exports = {
  create,
};
