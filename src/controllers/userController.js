const { response } = require("express");

const userController = (User) => {
    const getUser = async(req, res) => {
        res.send('test');
    }

    return { getUser };
}

module.exports = userController;