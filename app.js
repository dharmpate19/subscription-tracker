import express from 'express';

const app = express();

app.get('/', (req,res) =>{
    res.send("Welcome to teh subscription tracker API")
})

app.listen(3000, () => console.log('Server running on port http://localhost:3000'));

export default app;