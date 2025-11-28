import PasswordResetModel from "../dao/models/passwordReset.model.js";

class PasswordResetService {
  async createRequest(email, token) {
    return await PasswordResetModel.create({
      email,
      token,
      expiresAt: Date.now() + 3600000
    });
  }

  async validateToken(token) {
    return await PasswordResetModel.findOne({
      token,
      expiresAt: { $gt: Date.now() }
    });
  }

  async deleteToken(token) {
    return await PasswordResetModel.deleteOne({ token });
  }
}

export default new PasswordResetService();
