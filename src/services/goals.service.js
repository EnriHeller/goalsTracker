import GoalsDao from '../models/daos/goals.dao.js';
//import generateResponse from '../utils/openai.js';

export class GoalsService {
  static async getAll() {
    return await GoalsDao.getAll();
  }

  static async getById(id) {
    if (!id || isNaN(id)) {
      throw new Error('ID not valid');
    }
    const goal = await GoalsDao.getById(+id);

    if (!goal) {
      throw new Error('Goal not found');
    }

    return goal;
  }

  static async create(goalPayload) {

    // You can add additional validation here for other properties

    const newGoal = await GoalsDao.create(goalPayload);

    // Perform any additional actions or validations if needed
    // For example, you can call an external API, generate responses, etc.

    return newGoal;
  }
}
