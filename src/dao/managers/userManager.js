import userModel from "../models/user.model.js";

export default class UserManager {
    async getByEmail(email) {
    return await userModel.findOne({ email });
}

    async getById(id) {
    return await userModel.findById(id);
}

    async create(data) {
    return await userModel.create(data);
}

    async updatePassword(id, newPassword) {
    return await userModel.findByIdAndUpdate(
    id,
    { password: newPassword },
    { new: true }
    );
}
}
