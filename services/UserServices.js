const userModel = require('../models/User');

exports.createUser = async (user) => {
    return await userModel.create(user);
}
exports.findUserByEmail = async (email) => {
    return await userModel.findOne({ email });
}