import express from 'express';

// middleware
import middlewares from '../middlewares/index.js';

// controller
import orderController from '../controllers/orderController.js';

const orderRouter = express.Router();

// order routes

orderRouter.post('/', middlewares.order, orderController.postOrder);

orderRouter.get('/', orderController.getAllOrder);

export default orderRouter;
