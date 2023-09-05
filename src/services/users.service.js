import UsersDao from '../models/daos/users.dao.js';

export class UsersService {
  static async getAll() {
    return await UsersDao.getAll();
  }

  static async getById(id) {
    if (!id || isNaN(id)) {
      throw new Error('ID not valid');
    }
    const user = await UsersDao.getById(+id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  static async create(userPayload) {

    userPayload.active = true;

    const newUser = await UsersDao.create(userPayload);

    return newUser;
  }
}
