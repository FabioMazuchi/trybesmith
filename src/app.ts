import express from 'express';
import productRouter from './routes/productRouter';
import userRouter from './routes/userRouter';
import orderRouter from './routes/orderRouter';
import loginRouter from './routes/loginRouter';

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);

export default app;
