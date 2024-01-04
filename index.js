import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

//import routes
import loginRouter from './routes/login.js';
import inventoryRouter from './routes/inventory.js';
import orderRouter from './routes/order.js';

const app = express();
const URI =
  'mongodb+srv://admin:admin@test-web73.wigppnq.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(URI);

app.use(cors());
app.use(express.json());

// Routes
app.use('/login', loginRouter);
app.use('/inventory', inventoryRouter);
app.use('/order', orderRouter);

app.listen(3002, () => {
  console.log('Server has been run on 3001!');
});
