
import UserManager from "../dao/managers/userManager.js";
const userManager = new UserManager();

export default class UserRepository {
  async getByEmail(email) { return await userManager.getByEmail(email); }
  async getById(id) { return await userManager.getById(id); }
  async create(userData) { return await userManager.create(userData); }
  async update(id, data) { return await userManager.update(id, data); }
  
}
export const userRepository = new UserRepository();
