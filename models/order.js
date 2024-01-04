import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema({
  item: String,
  price: Number,
  quantity: Number,
});

const OrderModel = mongoose.model('orders', OrderSchema);

export default OrderModel;
