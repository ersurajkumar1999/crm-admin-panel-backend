const userServices = require('../services/UserServices');
const profileService = require('../services/profileService');
const validateRegisterInput = require("../validation/register");
const helperPassword = require('../helpers/Password');

exports.createNewUser = async (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json({ errors: errors, status: false });
    }
    const { name, email, password } = req.body;
    const checkUserExists = await userServices.findUserByEmail(email);
    if (checkUserExists) {
        return res.status(400).json({ status: false, message: "Email is already registered!" });
    }
    const pass = await helperPassword.hashedPassword(password);
    try {
        const userInfo = {
            name: name,
            email: email,
            password: pass,
            accountType: "User"
        }
        const user = await userServices.createUser(userInfo);

        // Create a profile for the user
        user.profile = await profileService.createNewProfile({
            userId: user.id,
            about: null,
            image: null,
            coverImage: null,
            gender: null,
            dateOfBirth: null,
            contactNumber: null,
        });


        res.json({ data: user, status: true });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

