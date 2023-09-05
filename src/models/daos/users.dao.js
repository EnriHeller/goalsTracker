import userModel from '../schemas/user.model.js';

class UsersDao {
  async getAll() {
    const users = await userModel.find();
    return users;
  }

  async getById(id) {
    const user = await userModel.findById(id).lean();
    return user;
  }

  async create(payload) {
    const newUser = await userModel.create(payload);
    return newUser;
  }

  async update(id, payload) {
    const updatedUser = await userModel.findByIdAndUpdate(id, payload, { new: true });
    return updatedUser;
  }

  async delete(id) {
    const deletedUser = await userModel.findByIdAndDelete(id);
    return deletedUser;
  }
}

export default new UsersDao();
