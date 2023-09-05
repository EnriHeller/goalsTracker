import { GoalsService } from '../services/goals.service.js';

export class GoalsController {
  static async getAll(req, res, next) {
    try {
      const response = await GoalsService.getAll();
      res.status(200).json({
        success: true,
        payload: response,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getById(req, res, next) {
    const { goalId } = req.params;
    try {
      const response = await GoalsService.getById(goalId);
      res.json({
        success: true,
        payload: response,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async create(req, res, next) {
    const goalPayload = req.body;
    try {
      const response = await GoalsService.create(goalPayload);
      res.status(201).json({
        success: true,
        payload: response,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default GoalsController
