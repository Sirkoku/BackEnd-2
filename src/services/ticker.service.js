import TicketModel from "../dao/models/ticket.model.js";

class TicketsService {
  async createTicket({ code, amount, purchaser }) {
    return await TicketModel.create({
      code,
      amount,
      purchaser,
      purchase_datetime: new Date()
    });
  }

  async getTicketByCode(code) {
    return await TicketModel.findOne({ code });
  }
}

export default new TicketsService();
