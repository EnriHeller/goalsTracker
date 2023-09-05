import goalModel from '../schemas/goal.model.js';

class GoalsDao {
  async getAll() {
    const goals = await goalModel.find();
    return goals;
  }

  async getById(id) {
    const goal = await goalModel.findById(id).lean();
    return goal;
  }

  async create(payload) {
    const newGoal = await goalModel.create(payload);
    return newGoal;
  }

  async update(id, payload) {
    const updatedGoal = await goalModel.findByIdAndUpdate(id, payload, { new: true });
    return updatedGoal;
  }

  async delete(id) {
    const deletedGoal = await goalModel.findByIdAndDelete(id);
    return deletedGoal;
  }

  async updateIncentive(goalId, incentiveData) {
    // Find the goal by its ID
    const goal = await goalModel.findById(goalId);

    if (!goal) {
      throw new Error('Goal not found');
    }

    // Update the incentive property of the goal
    goal.incentive = incentiveData;

    // Save the updated goal
    const updatedGoal = await goal.save();
    return updatedGoal;
  }

  async deleteIncentive(goalId) {
    // Find the goal by its ID
    const goal = await goalModel.findById(goalId);

    if (!goal) {
      throw new Error('Goal not found');
    }

    // Remove the incentive property from the goal
    goal.incentive = undefined;

    // Save the updated goal
    const updatedGoal = await goal.save();
    return updatedGoal;
  }
}


export default new GoalsDao();
