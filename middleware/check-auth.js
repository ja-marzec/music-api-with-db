const jwt = require("jsonwebtoken");

module.exports = (req, res, next ) => {
    const decpded =  jwt.verify(req.body.token, precess.env.JWT_KEY)
    next();
};
