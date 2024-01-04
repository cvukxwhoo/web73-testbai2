import { verifyToken } from '../utils/index.js';

const middlewares = {
  login: (req, res, next) => {
    const { admin, password } = req.body;
    // Must have userName
    if (!admin) {
      res.status(400).json({
        message: 'Please provide a username',
      });
      return;
    }
    // Must have password
    if (!password) {
      res.status(400).json({
        message: 'Please provide a password',
      });
      return;
    }
    next();
  },

  order: async (req, res, next) => {
    const { item, price, quantity } = await req.body;
    // item
    if (!item) {
      res.status(400).json({
        message: 'Please provide item name',
      });
      return;
    }

    // price
    if (!price) {
      res.status(400).json({
        message: 'Please provide price item',
      });
      return;
    }

    // quantity
    if (!quantity) {
      res.status(400).json({
        message: 'Please provide quantity item',
      });
      return;
    }
    next();
  },

  inventory: async (req, res, next) => {
    const { sku, description, instock } = await req.body;
    // sku
    if (!sku) {
      res.status(400).json({
        message: 'Please provide sku name',
      });
      return;
    }

    // description
    if (!description) {
      res.status(400).json({
        message: 'Please provide description item',
      });
      return;
    }

    // instock
    if (!instock) {
      res.status(400).json({
        message: 'Please provide instock item',
      });
      return;
    }
    next();
  },

  checkToken: async (req, res, next) => {
    const token = String(req.header['authorization']).split(' ')[1];
    const checkToken = verifyToken(token);
    req.user = checkToken;
    next();
  },
};

export default middlewares;
