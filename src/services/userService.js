const userModel = require('../models/user');

const getUserProfile = async (id) => {
    return await userModel.findUserById(id);
};

const updateUserProfile = async (id, data) => {
    return await userModel.updateUser(id, data);
};

module.exports = {
    getUserProfile,
    updateUserProfile
};
