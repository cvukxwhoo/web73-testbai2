import OrderModel from '../models/Order.js';

const orderController = {
  // Duyệt POST Login
  postOrder: async (req, res) => {
    try {
      const { item, price, quantity } = await req.body;
      const createOrder = await OrderModel.create({
        item,
        price,
        quantity,
      });
      if (createOrder) {
        res.status(200).json({
          message: 'Create Order successfully',
          data: createOrder,
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
  getAllOrder: async (req, res) => {
    try {
      const getAllOrder = req.body;
      const AllOrderSuccess = await OrderModel.find(getAllOrder);
      res.status(200).json({
        message: 'Users retrieved successfully',
        data: AllOrderSuccess,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};
export default orderController;
