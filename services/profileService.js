const userProfile = require('../models/Profile');

exports.createNewProfile = async (profileInfo) => {
    return await userProfile.create(profileInfo);
}