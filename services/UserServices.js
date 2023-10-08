const userModel = require('../models/User');
const profileModel = require('../models/Profile');
exports.createUser = async (user) => {
    return await userModel.create(user);
}
exports.findUserByEmail = async (email) => {
    return await userModel.findOne({ email });
}

exports.findUserById = async (userId) => {
    // return await userModel.findOne({ _id: userId }).populate('profile').execPopulate();
    const user = await userModel.findOne({ _id: userId });
    if (user) {
        const profile = await profileModel.findOne({ userId: user._id });
        user.profile = profile; // Populate the 'profile' field manually
    }
    return user;
}
exports.getAllUsers = async (skip, perPage) => {
    return await userModel.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(perPage)
        .exec();
}
exports.countTotalUsers = async () => {
    return await userModel.countDocuments();
}