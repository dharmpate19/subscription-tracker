import express from 'express';
import {PORT} from './config/env.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middleware/error.middleware.js';
import cookieParser from 'cookie-parser';
import arcjetMiddleware from './middleware/arcjet.middleware.js';



const app = express();
app.set("trust proxy", true);

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(arcjetMiddleware)

app.get('/', (req,res) =>{
    res.send("Welcome to the subscription tracker API")
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscription', subscriptionRouter);

app.use(errorMiddleware)

const startServer = async () => {
  try {
    await connectToDatabase();    // connect first
    app.listen(PORT, () => {      // start server after
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start:", error);
    process.exit(1);              // fail safely
  }
};

startServer();

export default app;