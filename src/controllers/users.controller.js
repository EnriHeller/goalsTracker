import { UsersService } from '../services/users.service.js';

export class UsersController {
  static async getAll(req, res, next) {
    try {
      const response = await UsersService.getAll();
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
    const { userId } = req.params;
    try {
      const response = await UsersService.getById(userId);
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
    const userPayload = req.body;
    try {
      const response = await UsersService.create(userPayload);
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

export default UsersController

