export default class UserRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getUserByEmail = (email) => {
    return this.dao.getUserByEmail(email);
  };

  getUserById = (id) => {
    return this.dao.getUserById(id);
  };

  createUser = (user) => {
    return this.dao.createUser(user);
  };

  updatePassword = (uid, newPassword) => {
    return this.dao.updatePassword(uid, newPassword);
  };
}
