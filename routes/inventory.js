import express from 'express';

// middleware
import middlewares from '../middlewares/index.js';

// controller
import inventoryController from '../controllers/inventoryController.js';

const inventoryRouter = express.Router();

// inventory routes

inventoryRouter.post(
  '/',
  middlewares.inventory,
  inventoryController.postInventory
);

inventoryRouter.get('/', inventoryController.getAllProduct);

inventoryRouter.get('/low-quantity', inventoryController.lowQuantity);

export default inventoryRouter;
