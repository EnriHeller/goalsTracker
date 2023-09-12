import UsersDao from '../models/daos/users.dao.js';
import {GoalsService} from "./goals.service.js"
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

    const {title, description, category, type, status, goal} = userPayload.goal 

    if(!title && !description && !category){
      await GoalsService.create({title,description,category})
    }

    if(type == "me"){
      status = true
    }

    userPayload.goals = [goal]
    delete userPayload.goal

    const newUser = await UsersDao.create(userPayload);

    return newUser;
  }
}
