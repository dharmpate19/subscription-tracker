import express from 'express';
import {PORT} from './config/env.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';


const app = express();

app.get('/', (req,res) =>{
    res.send("Welcome to teh subscription tracker API")
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/subscription', subscriptionRouter);

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));

export default app;