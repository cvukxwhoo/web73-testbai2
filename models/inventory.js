import mongoose from 'mongoose';

const InventorySchema = mongoose.Schema({
  sku: String,
  description: String,
  instock: Number,
});

const InventoryModel = mongoose.model('inventory', InventorySchema);

export default InventoryModel;
