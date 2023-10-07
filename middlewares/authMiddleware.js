const jwt = require("jsonwebtoken");

const verify = require("../utilities/verify-token");

exports.auth = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: 'No token provided'
        });
    }
    try {
        try {
            let decode = jwt.verify(verify(req), process.env.JWT_SECRET);
            if (!decode) {
                return res.status(401).json({
                    success: false,
                    message: "wrong token"
                })
            }
            req.user = decode  /* set user data to req.user me */
            next();
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: 'token is missing'
            })
        }
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Something went wrong while validating the token",
        })
    }

}