const express = require('express');
const userController = require('../controllers/userController');

const routes = User => {
    const userRouter = express.Router();
    const controller = userController(User);
    const { getUser } = controller;

    userRouter
        .route('/test')
        .get(getUser)

    return userRouter;
}

module.exports = routes;