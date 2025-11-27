import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req,res) => {
    res.json({title : "Get all users"})
});

userRouter.get('/:id', (req,res) => {
    res.json({title : "Get single user"})
});

userRouter.post('/', (req,res)=> {
    res.json({message : "Create a new User"})
});

userRouter.put('/:id', (req,res) => {
    res.json({title : "Upadte user"})
});

userRouter.delete('/:id', (req,res) => {
    res.json({title : "Delete user"})
});

export default userRouter;