import { Router } from "express";
import authorize from "../middleware/auth.middleware.js";
import { createSubscription, getUserSubscription } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req,res) => {
    res.json({title : "Get all subscription"})
});

subscriptionRouter.get('/:id', (req,res) => {
    res.json({title : "Get subscription details"})
});

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req,res) => {
    res.json({title : "Update subscription"})
});

subscriptionRouter.delete('/:id', (req,res) => {
    res.json({title : "Delete subscription"})
});

subscriptionRouter.get('/user/:id', authorize, getUserSubscription);

subscriptionRouter.put('/:id/cancel', (req,res) => {
    res.json({title : `Cancel subscription`})
});

subscriptionRouter.get('/upcoming-renewals', (req,res) => {
    res.json({title : "Get all upcoming renewals"})
})

export default subscriptionRouter;