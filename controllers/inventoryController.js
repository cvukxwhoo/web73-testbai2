import InventoryModel from '../models/inventory.js';

const inventoryController = {
  // Duyệt POST Login
  postInventory: async (req, res) => {
    try {
      const { sku, description, instock } = await req.body;
      const createProduct = await InventoryModel.create({
        sku,
        description,
        instock,
      });
      if (createProduct) {
        res.status(200).json({
          message: 'Create Product successfully',
          data: createProduct,
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
  getAllProduct: async (req, res) => {
    try {
      const getAllProduct = req.body;
      const AllProductSuccess = await InventoryModel.find(getAllProduct);
      res.status(200).json({
        message: 'Users retrieved successfully',
        data: AllProductSuccess,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

  lowQuantity: async (req, res) => {
    try {
      const lowQuantityProducts = await InventoryModel.find({
        instock: { $lt: 100 },
      });

      res.json(lowQuantityProducts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
export default inventoryController;
