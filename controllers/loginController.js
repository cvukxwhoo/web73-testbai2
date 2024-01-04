import UserModel from '../models/user.js';
import { createAccessToken } from '../utils/index.js';

const loginController = {
  // Duyệt POST Login
  postLogin: async (req, res) => {
    try {
      const { admin, password } = req.body;
      const userLogin = await UserModel.create({ admin, password });
      if (userLogin) {
        res.status(200).json({
          message: 'User logged in successfully',
          data: createAccessToken(userLogin),
        });
        return;
      }
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  // GET ALL Login
  getAllLogin: async (req, res) => {
    try {
      const getUserLogin = req.body;
      const AllUserLoginSuccess = await UserModel.find(getUserLogin);
      res.status(200).json({
        message: 'Users retrieved successfully',
        data: AllUserLoginSuccess,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};
export default loginController;
